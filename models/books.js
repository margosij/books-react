const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: String, require: true },
    image: String,
    link: { type: String, require: true },
    date: { type: Date, default: Date.now}
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book