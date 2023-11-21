var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookHostSchema = new Schema({
    year : {
        type: String,
        enum: [2021, 2022, 2023,2024],
        required : [true, "A score is mandatory"],
    },
    title : {
        type: String,
        minlength : [1, 'The value of path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({MINLENGTH}).'],
        maxlength : [100, 'The value of path `{PATH}` (`{VALUE}`) exceeds the maximum allowed length ({MAXLENGTH}).'],
        required : [true, "A title is mandatory"],
    },
    author : {
        type: String,
        minlength : [1, 'The value of path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({MINLENGTH}).'],
        maxlength : [100, 'The value of path `{PATH}` (`{VALUE}`) exceeds the maximum allowed length ({MAXLENGTH}).'],
        required : [true, "An author is mandatory"],
    },
    score : {
        type: String,
        enum: ['1','2','3','4','5'],
        required : [true, "A score is mandatory"],
    },
    review : {
        type: String,
        maxlength : [1000, 'The value of path `{PATH}` (`{VALUE}`) exceeds the maximum allowed length ({MAXLENGTH}).'],
    }
});

module.exports = mongoose.model('BookHost', bookHostSchema);