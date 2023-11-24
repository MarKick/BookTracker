var mongoose = require('mongoose');
var dbServer = '10.96.0.101:27017'; // Maybe do this dynamically?
// var dbServer = '0.0.0.0:27017';
const dbPort = '27017';
const dbName = 'BookHost';
var Book = require('./BookHost'); // Bookhost DB schema
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
            // .then( () => console.log('Connected to database', dbName))
            .catch( (err) => {
                console.error('Database connection error', dbName);
                console.error(' trying to connect to server:', connection);
            });
    };

    async addBook(year, title, author, score, review) {
        
        const newbook_instance = new Book({year: year, title: title, author: author, score: score, review: review});
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
            .equals(year)
            .exec();
    };

    async deleteAll() {
        return Book.deleteMany({});
    }

}

module.exports = BookHandler;