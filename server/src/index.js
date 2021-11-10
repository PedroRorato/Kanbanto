const express = require('express');
const cors = require('cors');
const routes = require("./routes");

//Start
require("./models")
//Start app
const app = express();

//Enable JSON
app.use(cors())
app.use(express.json())

//Routes
app.use(routes);

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));