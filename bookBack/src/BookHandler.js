var mongoose = require('mongoose');
var dbServer = '127.0.0.1:27017';
// var dbServer = '0.0.0.0:27017';
const dbPort = '27017';
const dbName = 'BookHost';
var BookHost = require('./BookHost'); // Bookhost DB schema
mongoose.set("strictQuery", false);

class BookHandler {
    constructor() {
    }

    async connect() {
        if (!process.env.BOOK_HOST) {
            console.log('WARNING: the environment variable BOOK_HOST is not set');        
        } else {
            dbServer = process.env.BOOK_HOST + ':' + dbPort;
        }

        let connection = `mongodb://${dbServer}/${dbName}`;
        return mongoose.connect(connection)
            .then( () => console.log('Connected to database', dbName))
            .catch( (err) => {
                console.error('Database connection error', dbName);
                console.error(' trying to connect to server:', connection);
            });
    };

    async addBook(year, title, author, score, review) {
        
        const newbook_instance = new BookHost({year: year, title: title, author: author, score: score, review: review});
        try {
            await newbook_instance.save();
        } catch(err) {
            console.log('Error while inserting test text:', err.message);
        }    
        // .catch(err => console.log('Error while inserting test text:', err.message)); // Error here, prob network error
    };

    async getBooks(year) {
        return Book.find()
            .where("year")
            .equals(year);
            // .then(results => { // .find() returns query, maybe format?
            // }
            // );
        
        // Product.find({},function(err, products) {
        //     if (err) {
        //         response.status(500).send({error: "Could not fetch products. "+ err});
        //     } else {
        //         response.send(products);
        //     }
        // });
    };
}

module.exports = BookHandler;