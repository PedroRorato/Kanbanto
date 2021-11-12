const express = require("express");
const cors = require("cors");

//Custom files
const routes = require("./routes");

//Start app
const app = express();

//Enable JSON
app.use(cors());
app.use(express.json());

//Routes
routes(app);

app.listen(3333, () => console.log("Server running on port 3333"));