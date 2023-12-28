const userController = require('../controller/UserController');

function handleRoute(req, res){
    const { method, url} = req;

    if(method === 'GET' && (url === '/users' || url === '/users/')){
        userController.index(req, res);
    } else if(method === 'POST' && (url === '/users' || url === '/users/')){
        userController.store(req, res); 
    } else if(method === 'GET' && url.startsWith('/users/')){
        userController.show(req, res);
    } else if((method === 'PUT' || method === 'PATCH') && url.startsWith('/users/')){
        userController.update(req, res);
    } else if(method === 'DELETE' && url.startsWith('/users/')){
        userController.destroy(req, res);
    } else {
        userController.urlNotFound(req, res);
    }
}

module.exports = {
    handleRoute
};