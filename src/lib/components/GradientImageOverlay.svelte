<script>
    export let hexColor = '#AABBCC';  // Default hex color
    export let imageUrl = '';         // Default image URL
  
    // Utility functions for color manipulation (closure-style functions)
    const colorUtils = (function() {
      function hexToRgb(hex) {
        let bigint = parseInt(hex.slice(1), 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return { r, g, b };
      }
  
      function rgbToHex(r, g, b) {
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
      }
  
      function luminance(r, g, b) {
        return 0.299 * r + 0.587 * g + 0.114 * b;
      }
  
      function adjustBrightness(hex, amount) {
        let { r, g, b } = hexToRgb(hex);
        r = Math.max(0, Math.min(255, r + amount));
        g = Math.max(0, Math.min(255, g + amount));
        b = Math.max(0, Math.min(255, b + amount));
        return rgbToHex(r, g, b);
      }
  
      function calculateGradient(hex) {
        let { r, g, b } = hexToRgb(hex);
        let luminanceValue = luminance(r, g, b);
        let adjustment = luminanceValue > 128 ? -50 : 50;
        let adjustedColor = adjustBrightness(hex, adjustment);
        return [hex, adjustedColor];
      }
  
      return { calculateGradient };
    })();
  
    // Get the gradient colors based on the provided hexColor
    let gradientColors = colorUtils.calculateGradient(hexColor);
  </script>
  
  <style>
    .background-container {
      position: relative;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .gradient-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(to bottom right, {gradientColors[0]}, {gradientColors[1]});
      opacity: 0.7; /* Adjust the transparency of the gradient */
    }
  
    img {
      position: relative;
      z-index: 1; /* Ensures image is on top of the gradient */
      max-width: 100%;
      max-height: 100%;
    }
  </style>
  
  <div class="background-container" style="background-image: url({imageUrl})">
    <!-- Gradient Overlay -->
    <div class="gradient-overlay"></div>
  
    <!-- Optional content inside the container -->
    <slot></slot>
  </div>
  