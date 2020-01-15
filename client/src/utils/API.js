import axios from "axios";

export default {
  // Gets all books
  searchBooks: function(search) {
    const queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + search
    return axios.get(queryURL)
  },
  // Gets the book with the given id
  getBook: async () => {
    let res = await axios.get("/api/books");
    console.log(res, "res data here")
    return res.data || []
  },
  // Deletes the book with the given id
  deleteBook: id => {
    return axios.delete("/api/books" + id)
  },
  // Saves a book to the database
  saveBook: bookData => {
    console.log(bookData)
    return axios.post("/api/books", bookData)
  }
};