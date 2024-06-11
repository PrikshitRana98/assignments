/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
    const http = require('http');
const path = require('path');
const fs = require('fs');

const directoryPath = path.resolve(__dirname, '../files');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/files') {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(files));
    });
  } else if (req.method === 'GET' && req.url.startsWith('/file/')) {
    const filename = req.url.replace('/file/', '');
    const filePath = path.join(directoryPath, filename);
    
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.statusCode = 404;
          res.end('File not found');
        } else {
          res.statusCode = 500;
          res.end('Internal Server Error');
        }
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end('Route not found');
  }
});

module.exports = server;

    