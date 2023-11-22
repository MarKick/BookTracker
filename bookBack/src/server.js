
const express = require("express");
// const app = express(express.json());
const app = express();
app.use(express.json());
const cors = require("cors");
const mongoose = require('mongoose');

const route = 3001;
const IP_DB = '172.168.10.25';

const BookHandler = require('./BookHandler');

app.use(cors())

app.listen(route, () => { console.log("Server listening on port: ", route) });

app.get("/status", (req, res) => {
    console.log("\n !!! Check Status !!! \n");
    res.send("Check Status");
});

app.post("/addBook", (req, res) => {

    console.log(req.body);
    // Check if entry is complete (no null values)
    const bookhandler = new BookHandler();
    if (!req.body) return res.send('Empty add');
    if (!req.body.year || !req.body.title || !req.body.author || !req.body.score || !req.body.review) return res.send('Incomplete book info for it to be added to DB.');

    bookhandler.connect()
        .then( () => bookhandler.addBook(req.body.year, req.body.title, req.body.author, req.body.score, req.body.review))
        .then( () => console.log('Book added'))
        .catch( (err) => {
            console.log('Could not add text. Error', err);
        });

    res.json({responseFromServer: "success!!!!"})
});

app.post("/getBookList", (req, res) => {
    // make request to DB to recieve the book list
    // store response in res variable
    const bookhandler = new BookHandler();
    let year = req.body.year;
    let returnData = bookhandler.connect()
        .then( () => bookhandler.getBooks(year))
        .then ( result => {
            console.log(result);
            res.json(result);
        })
        .catch( (err) => {
            console.log('Could not add text. Error', err);
        });
    
});