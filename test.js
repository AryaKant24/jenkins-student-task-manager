const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const requiredFiles = [
  'app.js',
  'package.json',
  path.join('public', 'index.html'),
  path.join('public', 'app.js'),
];

console.log('Starting automated tests...');

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(projectRoot, file))) {
    console.error(`TEST FAILED: ${file} not found`);
    process.exit(1);
  }

  console.log(`TEST PASSED: ${file} exists`);
}

const page = fs.readFileSync(
  path.join(projectRoot, 'public', 'index.html'),
  'utf8',
);

for (const requiredElement of ['task-form', 'task-input', 'task-list']) {
  if (!page.includes(`id="${requiredElement}"`)) {
    console.error(`TEST FAILED: ${requiredElement} is missing from public/index.html`);
    process.exit(1);
  }
}

console.log('TEST PASSED: required task manager elements exist');
console.log('All automated tests passed.');
