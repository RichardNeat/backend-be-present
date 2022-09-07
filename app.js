const express = require('express');
const cors = require('cors');
const { getUsers } = require('./controllers/getUsers');
const { postUsers } = require('./controllers/postUsers');
const { getUserById } = require('./controllers/getUserById');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello world!');
});

app.get('/users', getUsers);

app.post('/users', postUsers);

app.get('/users/:userId', getUserById);

module.exports = app;