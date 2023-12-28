const userModel = require('../model/UserModel');
const message = require('../lib/message');
const controller = require('./controller');
const formidable = require('formidable');
const qs = require('querystring');

async function index(req, res){
    try{
        const users = await userModel.getAllUsers();

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(message.returnMessage(true, 200, "Success retrieving users data", users));
    } catch(err){
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(message.returnMessage(false, 500, "Error retrieving users data", err.message));
    } 
}

async function show(req, res){
    try{
        let id = req.url.split('/')[2];
        const user = await userModel.showUser(id);

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(message.returnMessage(true, 200, "Success retrieving user data", user));
    } catch(err){
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(message.returnMessage(false, 500, "Error retrieving user data", err.message));
    } 
}

async function store(req, res){
    try{    
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            if(err){
                res.writeHead(500, {'Content-Type': 'application/json'});
                res.end(message.returnMessage(false, 500, "Error storing user data", err.message));
            }
            const user = await userModel.createUser(fields.name, fields.email, fields.birthdate);

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(message.returnMessage(true, 200, "Success storing user data", user));
        })
    } catch(err){
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(message.returnMessage(false, 500, "Error storing user data", err.message));
    } 
}

async function update(req, res){
    try{    
        const form = new formidable.IncomingForm();
        let id = req.url.split('/')[2];
        form.parse(req, async (err, fields, files) => {
            if(err){
                res.writeHead(500, {'Content-Type': 'application/json'});
                res.end(message.returnMessage(false, 500, "Error updating user data", err.message));
            }
            const user = await userModel.updateUser(id, fields.name, fields.email, fields.birthdate);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(message.returnMessage(true, 200, "Success updating user data", user));
        })
    } catch(err){
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(message.returnMessage(false, 500, "Error updating user data", err.message));
    } 
}

async function destroy(req, res){
    try{
        let id = req.url.split('/')[2];
        const user = await userModel.deleteUser(id);

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(message.returnMessage(true, 200, "Success deleting user data", user));
    } catch(err){
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(message.returnMessage(false, 500, "Error deleting user data", err.message));
    } 
}

module.exports = {
    index, show, store, update, destroy, urlNotFound: controller.urlNotFound
};