const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputPath = 'C:/Users/GALIH JP/.gemini/antigravity/brain/69f5a8ee-6705-4965-8f64-85a2bbdbcab4/media__1773902874457.png';
const outputDir = path.join(__dirname, 'public/logos');

async function cropLogos() {
  try {
    // Logo 2 (Middle - Gradient)
    // Based on 724px total width. Middle is roughly 241 to 482.
    // Let's take 220 to 500 to be safe.
    await sharp(inputPath)
      .extract({ left: 220, top: 0, width: 270, height: 344 })
      .toFile(path.join(outputDir, 'logo-2.png'));
    
    // Logo 3 (Right - White)
    // Starts roughly at 482. Let's take 475 to the end.
    await sharp(inputPath)
      .extract({ left: 475, top: 0, width: 724 - 475, height: 344 })
      .toFile(path.join(outputDir, 'logo-3.png'));

    console.log('Logos cropped with wide fixed margins (no trim)');
  } catch (err) {
    console.error('Error cropping logos:', err);
  }
}

cropLogos();
