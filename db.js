import mysql from 'mysql2';

// Создание подключения к БД
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '852456852456',
    database: 'users_db'
});

// Подключение к БД
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the DataBase', err.stack);
        return;
    }
    console.log('Connection to the DB as id ' + connection.threadId);
});

export default connection;