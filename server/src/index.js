const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/boards', (req, res) => res.json("Você está na home"));
app.post('/boards/:boardId/task', (req, res) => res.json("Você está na home"));

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));