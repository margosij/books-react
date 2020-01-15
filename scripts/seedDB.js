const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/googlebooks"
)

const seedData = [
    {
    key: "1",
    title: "test",
    authors: "myself",
    image: "something",
    link: "this is the link",
    date: "1/13/2020"
    }
]

db.Book.remove({}).then(() => 
db.Book.collection.insertMany(seedData)).then(data => {console.log(data.result.n + "records inserted!")
process.exit(0)})