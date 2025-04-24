import mysql from 'mysql2/promise';

const DB = {
    host: "localhost",
    port: 10089,
    user: 'root',
    password: 'root',
    database: 'universidad'
}

const pool = mysql.createPool(DB);

export default pool;