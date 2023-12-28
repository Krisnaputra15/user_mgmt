const mysql = require('mysql2');

const connection = mysql.createConnection(`mysql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`);

connection.connect((err) => {
    if(err){
        console.error(`Error connecting to mysql: ${err}`);
    } else {
        console.log(`Connected to mysql`);
    }
})

module.exports = {
    connection
};