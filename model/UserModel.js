const db = require('../config/database');
const { v4: uuidv4} = require('uuid');

async function getAllUsers(){
    const query = `SELECT * FROM users`;

    try{
        const [ rows, fields ] = await db.connection.promise().query(query);

        return rows;
    } catch (err){
        return err; 
    }
}

async function createUser(name, email, birthdate){
    const query = `INSERT INTO users(id,name,email,date_of_birth) VALUES(?,?,?,?)`;
    const value = [uuidv4(), name, email, birthdate];

   try{
        const [ rows, fields ] = await db.connection.promise().query(query, value);
        return true;
    } catch (err){
        return err; 
    }
}

async function showUser(id){
    const query = `SELECT * FROM users where id = ?`;
    const value = [ id ];

    try{
        const [ rows, fields ] = await db.connection.promise().query(query, value);

        return rows;
    } catch (err){
        return err; 
    }
}

async function updateUser(id, name, email, birthdate){
    const query = `UPDATE users SET name = ?, email = ?, date_of_birth = ? WHERE id = ?`;
    const value = [name, email, birthdate, id];

    try{
        const [ rows, fields ] = await db.connection.promise().query(query, value);

        return true;
    } catch (err){
        return err; 
    }
}

async function deleteUser(id){
    const query = `DELETE FROM users where id = ?`;
    const value = [ id ];

    try{
        const [ rows, fields ] = await db.connection.promise().query(query, value);

        return true;
    } catch (err){
        return err; 
    }
}

module.exports = {
    getAllUsers, createUser, showUser, updateUser, deleteUser
}