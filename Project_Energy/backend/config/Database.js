

const mysql = require('mysql');

const db = mysql.createConnection({
    host:"localhost",
    user:"wandaadii", 
    password:"pasbatron", 
    database:"database_ujicoba",
    port:"3306"
})

module.exports = db;








// import { Sequelize } from "sequelize";

// const db = new Sequelize('crud_db', 'wandaadii', 'pasbatron',{
//     host: 'localhost',
//     dialect : 'mysql'
// });

// export default db;
