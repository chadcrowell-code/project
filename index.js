const http = require('http');
const winston = require('winston')

winston.log('info', 'Hello log files!', {
    someKey: 'some-value'
  })

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Hello, World</h1>');
    }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));