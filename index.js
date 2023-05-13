const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const Degree = require("./degree");

var degreeRouter = require("./routers/degree");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL);
console.log("Connected to Mongo Successfully!");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/api/v1", degreeRouter);

app.listen(3000, () => console.log("Server Started"));
