const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'app.js',
  'package.json',
  path.join('public', 'index.html'),
];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(__dirname, file))) {
    console.error(`BUILD FAILED: ${file} not found`);
    process.exit(1);
  }
}

console.log('Build completed successfully.');
