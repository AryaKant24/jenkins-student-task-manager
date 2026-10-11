const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const publicDirectory = path.join(__dirname, 'public');

const server = http.createServer((request, response) => {
  const requestedPath = request.url === '/' ? '/index.html' : request.url;
  const filePath = path.join(publicDirectory, requestedPath);

  if (!filePath.startsWith(publicDirectory)) {
    response.writeHead(404);
    response.end('Not found');
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end('Not found');
      return;
    }

    const contentType = path.extname(filePath) === '.html'
      ? 'text/html'
      : 'text/plain';

    response.writeHead(200, { 'Content-Type': `${contentType}; charset=utf-8` });
    response.end(content);
  });
});

if (require.main === module) {
  server.listen(port, () => {
    console.log(`Student Task Manager running at http://localhost:${port}`);
  });
}

module.exports = server;
