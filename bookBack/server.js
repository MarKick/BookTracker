const express = require("express");
const app = express();
const cors = require("cors");

const route = 3001;

app.use(cors())

app.listen(route, () => { console.log("Server listening on port: ", route) });

app.get("/status", (req, res) => {
    console.log("\n !!! Check Status !!! \n");
    res.send("Check Status");
});

// app.post("/getBookList", (req, res) => {
//     // console.log(req.sendToServer);
//     console.log("\n !!! Check getBookList !!! \n");

//     res.json({responseFromServer: "success!!!!"})
//     // res.send("Test");
// })

app.get("/getBookList", (req, res) => {
    // console.log(req.sendToServer);
    // console.log("\n !!! Check getBookList !!! \n");
    res.json({
        "tab1": {
            "count" : 3,
            "year" : 2024,
            "books" : [
                    {
                        "title" : "Frankenstein: modern Prometheus",
                        "author" : "Mary Shelly",
                        "score" : "5",
                        "review" : "Awesome"
                    }, 
                    {
                        "title" : "Astarte",
                        "author" : "Karin Boye",
                        "score" : "4", 
                        "review" : "Good"
                    }, 
                    {
                        "title" : "From whom the bell tolls",
                        "author" : "Ernest Hemmingway",
                        "score" : "ok"
                    }
                ]
            }
    })
    // res.send("Test");
})