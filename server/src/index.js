const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//Custom files
const routes = require("./routes");

//Start app
const app = express();
app.disable("x-powered-by");

//Hide version
const corsOption = {
  origin: "http://localhost:3000",
};

//Enable JSON
app.use(cors(corsOption));
app.use(express.json());

//Hide version
app.use(helmet.hidePoweredBy());

//Routes
routes(app);

app.listen(3333, () => console.log("Server running on port 3333"));