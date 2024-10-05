from PIL import Image, ImageDraw, ImageFilter
import os

def add_gradient_overlay(image_path, gradient_color, output_path):
    # Open the image file
    image = Image.open(image_path).convert('RGBA')

    # Create an image for the gradient
    gradient = Image.new('RGBA', image.size, color=(0, 0, 0, 0))

    # Create the gradient effect
    draw = ImageDraw.Draw(gradient)
    width, height = image.size
    for i in range(height):
        # Adjust transparency (255 -> 0) based on height
        alpha = int(255 * (1 - i / height))
        draw.line((0, i, width, i), fill=(*gradient_color, alpha))

    # Composite the gradient over the image
    blended = Image.alpha_composite(image, gradient)

    # Save the new image
    blended.save(output_path, format='PNG')

# Example usage:
# Path to original image
original_image = "/path/to/your/image.png"

# Define the gradient color as an (R, G, B) tuple
gradient_color = (255, 0, 0)  # Red gradient, adjust as needed

# Path to save the output image with the gradient
output_image = "/path/to/your/output/image_with_gradient.png"

# Apply the gradient overlay
add_gradient_overlay(original_image, gradient_color, output_image)
