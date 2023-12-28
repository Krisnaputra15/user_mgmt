const message = require('../lib/message');

function urlNotFound(req, res){
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(message.returnMessage(false, 404, "url not found", null));
}

module.exports = {
    urlNotFound
};