
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
    
    try {
        bookhandler.connect()
            .then( () => bookhandler.addBook(req.body.year, req.body.title, req.body.author, req.body.score, req.body.review))
            .then( () => console.log('Book added'))
            .catch( (err) => {
                console.log('Could not add text. Error', err);
            });
        
    } catch (e) {
        console.log("Error");
    }

    res.json({responseFromServer: "success!!!!"})
});

app.post("/getBookList", (req, res) => {
    // make request to DB to recieve the book list
    // store response in res variable
    console.log(req.body);
    const returnData = {
        "tab1": {
            "count" : 1,
            "year" : 2024,
            "books" : [
                {
                    "title" : "From whom the bell tolls",
                    "author" : "Ernest Hemmingway",
                    "score" : "3",
                    "review" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            ]
            },
        "tab2": {
            "count" : 1,
            "year" : 2023,
            "books" : [
                {
                    "title" : "Astarte",
                    "author" : "Karin Boye",
                    "score" : "4", 
                    "review" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            ]
        },
        "tab3": {
            "count" : 1,
            "year" : 2022,
            "books" : [
                {
                    "title" : "Frankenstein",
                    "author" : "Mary Shelly",
                    "score" : "5",
                    "review" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            ]
        },
        "tab4": {
            "count" : 1,
            "year" : 2021,
            "books" : [
                {
                    "title" : "The 4-hour work-week",
                    "author" : "Tim Ferris",
                    "score" : "3", 
                    "review" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
            ]
        }
    }


    res.json(returnData);
    
});