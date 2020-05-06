const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./config/jokes.config");

require("./routes/jokes.routes.js")(app);

app.listen(8000, () => console.log("listening on port 8000"));