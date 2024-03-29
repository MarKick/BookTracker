
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
    const bookhandler = new BookHandler();
    if (!req.body) return res.send('Empty add');
    if (!req.body.year || !req.body.title || !req.body.author || !req.body.score || !req.body.review) return res.send('Incomplete book info for it to be added to DB.');

    bookhandler.connect()
        .then( () => bookhandler.addBook(req.body.year, req.body.title, req.body.author, req.body.score, req.body.review))
        .then( () => res.json({responseFromServer: "Succeeded to add book!!"}))
        .catch( (err) => {
            console.log('Could not add text. Error', err);
        });
    
});

app.post("/getBookList", (req, res) => {
    const bookhandler = new BookHandler();
    let year = req.body.year;
    bookhandler.connect()
        .then( () => bookhandler.getBooks(year))
        .then ( result => {
            res.json(result);
        })
        .catch( (err) => {
            console.log('Could not fetch texts. Error', err);
        }); 
    
});

// app.post("/deleteAllDB" , (req, res) => {
//     const bookhandler = new BookHandler();
//     let year = req.body.year;
//     bookhandler.connect()
//         .then( () => bookhandler.deleteAll())
//         .then ( result => {
//             // console.log(result);
//             res.json(result);
//         })
//         .catch( (err) => {
//             console.log('Could not remove books. Error', err);
//         });
    
    
// });