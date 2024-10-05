# scripts/image_overlay.py
import sys
import os
import hashlib
from PIL import Image, ImageDraw
import colorsys

def hex_to_rgb(hex_color):
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def adjust_color_lightness(rgb, factor):
    h, l, s = colorsys.rgb_to_hls(*[x/255.0 for x in rgb])
    l = max(min(l * factor, 1.0), 0.0)
    r, g, b = colorsys.hls_to_rgb(h, l, s)
    return tuple(int(x * 255) for x in (r, g, b))

def get_file_hash(file_path):
    with open(file_path, "rb") as f:
        return hashlib.md5(f.read()).hexdigest()

def apply_gradient_overlay(image_path, hex_color):
    # Normalize paths
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    image_path = os.path.abspath(os.path.join(project_root, image_path))
    
    # Paths for original, processed, and hash files
    original_path = image_path
    processed_path = image_path.replace('.png', '_processed.png')
    hash_file_path = image_path + '.hash'

    # Check if processing is needed
    if os.path.exists(processed_path) and os.path.exists(hash_file_path):
        with open(hash_file_path, 'r') as f:
            stored_hash = f.read().strip()
        
        current_hash = hashlib.md5((get_file_hash(original_path) + get_file_hash(processed_path) + hex_color).encode()).hexdigest()
        
        if stored_hash == current_hash:
            print(f"Image {image_path} already processed with color {hex_color}. Skipping.")
            return

    # Process image
    img = Image.open(original_path).convert('RGBA')
    
    # Create color gradient
    rgb_color = hex_to_rgb(hex_color)
    light_color = adjust_color_lightness(rgb_color, 1.5)
    dark_color = adjust_color_lightness(rgb_color, 0.5)
    
    # Create gradient overlay
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    for i in range(img.size[1]):
        r = int(dark_color[0] + (light_color[0] - dark_color[0]) * i / img.size[1])
        g = int(dark_color[1] + (light_color[1] - dark_color[1]) * i / img.size[1])
        b = int(dark_color[2] + (light_color[2] - dark_color[2]) * i / img.size[1])
        draw.line((0, i, img.size[0], i), fill=(r, g, b, 128))
    
    # Combine the original image with the gradient
    combined = Image.alpha_composite(img, overlay)
    
    # Save the processed image
    combined.save(processed_path)
    print(f"Processed image saved as: {processed_path}")
    
    # Update hash file
    new_hash = hashlib.md5((get_file_hash(original_path) + get_file_hash(processed_path) + hex_color).encode()).hexdigest()
    with open(hash_file_path, 'w') as f:
        f.write(new_hash)
    print(f"Updated hash file: {hash_file_path}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python3 image_overlay.py <relative_image_path> <hex_color>")
        sys.exit(1)
    
    relative_image_path = sys.argv[1]
    hex_color = sys.argv[2].lstrip('#')
    apply_gradient_overlay(relative_image_path, hex_color)