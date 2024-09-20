import express from 'express';
import connection from "./db.js";

const app = express();
const port = 3000;

// Middleware для обработки JSON данных из тела запроса
app.use(express.json());

// Маршрут для добавления нового пользователя
app.post('/users', (req, res) => {
    const {name, email} = req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';

    connection.query(query, [name, email], (err, results) => {
        if(err) {
            console.error('Error adding user: ', err.stack);
            res.status(500).send('Error adding user');
            return;
        }
        res.status(201).send('User added successfully');
    });
});

// Маршрут для получения всех пользователей
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';

    connection.query(query, (err, results) => {
        if(err){
          console.error('Error fetching users: ', err.stack);
          res.status(500).send('Error fetching users');
          return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});