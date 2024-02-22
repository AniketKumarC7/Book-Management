const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/bookRoutes");
const app = express();
const PORT = 6001;
const MONGO_URL ='mongodb+srv://AniketK07:1234@cluster0.bdhga.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json());
app.use(cors());
app.use('/books' , router) ;
// Implement RESTful routes for the following operations:
// GET /books: Retrieve a list of all books.
// GET /books/:id: Retrieve a specific book by its ID.
// POST /books: Create a new book.
// PUT /books/:id: Update an existing book.
// DELETE /books/:id: Delete a book by its ID.

// app.get ('/books' , (req, res)=>{
//     res.send('Server Established') ;
// })



mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose Connected") ;
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));