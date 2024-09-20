/*
import express from 'express';

const app = express ();
const port = 3000;

// Middleware для парсинга JSON и URL кодированных данных
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Маршрут для корневого URL
app.get('/', (req, res) => {
    res.send('Wellcome to my site!');
})



app.get('/users', (req, res) => {
    res.send('List of users');
});

// app.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User ID: ${userId}`);
// });

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search query: ${query}`);
});

app.get('/users/:id', (req, res, next) => {
    const userId = req.params.id; // Параметр маршрута
    const userName = req.query.name; // Параметр запроса
    // Проверка на существование пользователя
    if (!userId) {
        const error = new Error('User not found');
        error.status = 404;
        return next(error); // Передача ошибки в middleware для обработки ошибок
    }
        res.send(`User ID: ${userId}, UserName: ${userName}`);
    });




// ⦁	Отправлять текстовые ответы (`res.send()`).
// ⦁	Отправлять JSON-ответы (`res.json()`).
// ⦁	Устанавливать статус ответа (`res.status()`).
// ⦁	Устанавливать заголовки ответа (`res.set()`).

// Обработка GET-запроса с текстовым ответом
app.get('/text', (req, res) => {
    res.send('Hello, this is a text response!');
})

// Обработка GET-запроса с JSON ответом
app.get('/json', (req, res) => {
    res.json({ message: 'Hello, this is a JSON response!'});
})

app.post('/submit', (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    if (!username || !email) {
        const error = new Error('Не заданы обязательные поля');
        error.status = 400;
        return next(error); // Передача ошибки в middleware для обработки ошибок
    }
        res.send(`Username: ${username}, Email: ${email}`);

});

// app.use((err, req, res, next) => {
//     console.error(err.stack); // Логирование ошибки
//     res.status(err.status || 500).json({ message: err.message }); // Отправка ответа с ошибкой
// });

app.use((err, req, res, next) => {
    console.error(err.stack); // Логирование ошибки
    res.status(err.status || 500); // Устанавливаем статус ошибки или 500 (Internal Server Error) по умолчанию
    res.json({
        error: {
            message: err.message
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});*/
