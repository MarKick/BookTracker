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
                        "review" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    }, 
                    {
                        "title" : "Astarte",
                        "author" : "Karin Boye",
                        "score" : "4", 
                        "review" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    }, 
                    {
                        "title" : "From whom the bell tolls",
                        "author" : "Ernest Hemmingway",
                        "score" : "3",
                        "review" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    }
                ]
            }
    }
    )
    // res.send("Test");
})