const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, 'build');

// Files and folders to copy
const targets = [
  'index.html',
  'terminal.html',
  'neo-styles.css',
  'styles.css',
  'script.js',
  'favicon.svg',
  'robots.txt',
  'sitemap.xml',
  'image'
];

// Helper to copy recursively
function copySync(src, dest) {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(file => {
      copySync(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Ensure build dir exists
if (!fs.existsSync(BUILD_DIR)) {
  fs.mkdirSync(BUILD_DIR, { recursive: true });
}

console.log('Building project into ./build directory...');

targets.forEach(target => {
  const src = path.join(__dirname, target);
  const dest = path.join(BUILD_DIR, target);
  try {
    copySync(src, dest);
    console.log(`Copied ${target}`);
  } catch (err) {
    console.warn(`Warning: Could not copy ${target}. It might be locked or missing.`);
  }
});

console.log('Build complete! Your files are in the "build" folder.');
