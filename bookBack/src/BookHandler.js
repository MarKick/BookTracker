var mongoose = require('mongoose');
var dbServer = '127.0.0.1:27017';
const dbPort = '27017';
const dbName = 'bookhost';
var Book = require('./BookHost'); // Bookhost DB schema

class BookHandler {
    constructor() {
    }

    connect() {
        // if (!process.env.TEXTSTORE_HOST) {
        //     console.log('WARNING: the environment variable TEXTSTORE_HOST is not set');        
        // } else {
        //     dbServer = process.env.TEXTSTORE_HOST + ':' + dbPort;
        // }

        let connection = `mongodb://${dbServer}/${dbName}`
        return mongoose.connect(connection)
            //.then( () => console.log('Connected to database', dbName))
            .catch( (err) => {
                console.error('Database connection error', dbName);
                console.error(' trying to connect to server:', connection);
            });
    };

    async addBook(year, title, author, score, review) {
        
        const newbook_instance = new Book({year: year, title: title, author: author, score: score, review: review});
        await newbook_instance.save().catch(err => console.log('Error while inserting test text:', err.message)); // Error here
    }

    getBooks(year) {
        return Book.find()
            .where("year")
            .equals(year);
            // .then(results => { // .find() returns query, maybe format?
            // }
            // );
    };
}

module.exports = BookHandler;