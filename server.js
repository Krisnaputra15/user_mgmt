const env = require('dotenv');
env.config();
const route = require('./route/api');
const http = require('http');

const server = http.createServer((req, res) => {
    route.handleRoute(req, res);
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});