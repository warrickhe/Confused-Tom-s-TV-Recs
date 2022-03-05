const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//just show server is running

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = 4000;

app.get("/status", async (req, res) => {
    return res.status(400).send("server for GET is running");
});

app.post("/status", async (req, res) => {
    return res.status(200).send({
        status: "server for POST is running",
        message: req.body.message
    });
});

app.listen(PORT, function() {
    console.log(`server running on port ${PORT}`);
});

const url = "mongodb+srv://Admin:strongpassword@cluster0.tjual.mongodb.net/ConfusedTom?retryWrites=true&w=majority"
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "ConfusedTom"
}).then(() => {
    console.log("connected successfully to server, using database %s\n", mongoose.connection.$dbName);
}).catch(err => {
    console.log(err);
});

const userRouter = require('./routes/users')

app.use("/",userRouter)