const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '!21Herbert21!',
        database: 'employees'
    },

    console.log('Connected to the Employee Database!')
);


module.exports = db;