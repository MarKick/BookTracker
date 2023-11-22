
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
            
        })
        .catch( (err) => {
            console.log('Could not add text. Error', err);
        });
    
    const retData = [
        {
            "year" : "2024",
            "title" : "Frankenstein",
            "author" : "Mary Shelly",
            "score" : "5",
            "review" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            "year" : "2024",
            "title" : "Astarte",
            "author" : "Karin Boye",
            "score" : "4", 
            "review" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            "year" : "2024",
            "title" : "What measures a good life",
            "author" : "Clayton Christensen",
            "score" : "3", 
            "review" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            "year" : "2024",
            "title" : "J. Robert Oppenheimer",
            "author" : "Kai Bird",
            "score" : "4", 
            "review" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            "year" : "2024",
            "title" : "From whom the bell tolls",
            "author" : "Ernest Hemmingway",
            "score" : "3",
            "review" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ];
    // console.log(retData);
    res.json(retData);
});