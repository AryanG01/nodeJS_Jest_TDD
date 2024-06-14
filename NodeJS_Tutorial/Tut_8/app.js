const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.end('<h1>Welcome to the homepage!</h1>');
    } else if (req.url === '/about') {
        res.end('<h1>About us</h1><p>We are a company dedicated to providing awesome services.</p>');
    } else {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});
server.listen(PORT, 'localhost', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
