const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    // key: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    authors: { type: Array, required: true },
    image: String,
    link: { type: String, required: true },
    date: { type: Date, default: Date.now}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;