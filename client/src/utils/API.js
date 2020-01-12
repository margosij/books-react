import axios from "axios";

export default {
  // Gets all books
  searchBooks: function(search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q" + search);
  },
  // Gets the book with the given id
  getBook: function() {
    let res = await axios.get("/api/books/");
    return res.data || []
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    let res = await axios.delete("/api/books/" + id);
    return res.data || []
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    let res = await axios.post("/api/books", bookData);
    return res.data || []
  }
};