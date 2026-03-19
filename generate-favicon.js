const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputPath = 'C:/Users/GALIH JP/.gemini/antigravity/scratch/youth-rise-run/public/logo-2.png';
const outputPath = 'C:/Users/GALIH JP/.gemini/antigravity/scratch/youth-rise-run/app/favicon.ico';

async function generateFavicon() {
  try {
    // The runner icon with the sun is on the right of the text.
    // Let's crop just that part.
    // In our previous crop, logo-2.png was the full image (724x344).
    // The icon is roughly in the middle-right of the middle logo.
    
    await sharp(inputPath)
      .extract({ left: 360, top: 40, width: 230, height: 230 }) // Approximate runner icon area
      .resize(64, 64)
      .toFile(outputPath);

    console.log('Favicon generated successfully at ' + outputPath);
  } catch (err) {
    console.error('Error generating favicon:', err);
    // Fallback: just copy the color logo if cropping fails
    fs.copyFileSync(inputPath, 'C:/Users/GALIH JP/.gemini/antigravity/scratch/youth-rise-run/app/favicon.png');
  }
}

generateFavicon();
