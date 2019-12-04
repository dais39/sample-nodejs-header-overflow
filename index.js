const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
});

server.on('clientError', (err, socket) => {
    console.log('ErrorCode: ', err.code);
    console.log('BytesParsed: ', err.bytesParsed);
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(8080);
