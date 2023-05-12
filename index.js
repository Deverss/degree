const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const Degree = require("./degree");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL);
console.log("Connected to Mongo Successfully!");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/add", async (req, res) => {
    const address = req.body.degree;
    try {
        const addDegree = new Degree({address});
        await addDegree.save();
        res.json("successfully!!!")
    } catch (error) {
        return console.log(error);

    }
    
});
app.get("/",(req,res)=>{
    res.send("doraemon");
})

app.listen(3000, () => console.log("Server Started"));
