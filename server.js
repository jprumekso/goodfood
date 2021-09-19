const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const server = express();

server.use('/', serveStatic(path.join(__dirname, '/dist')));

const port = process.env.PORT || 3000;
server.listen(port);

console.log(`listening on port: ${port}`);
