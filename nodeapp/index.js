const express = require("express");
const cors = require("cors");
const path = require("path");
const {MongoClient, ObjectId} = require("mongodb"); //import mongoclient from mongodb
//const { request } = require("http");
const dotenv = require("dotenv");
const { request } = require("http");

dotenv.config();

const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}/`;

const client = new MongoClient(dbUrl);

const app = express(); // create an express app
const port = process.env.PORT || "8888"; 

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(cors({
  origin: "*"
}));

app.listen(port,() => {
    console.log(`Listening on http://localhost:${port}`);
});

//mongodb functions
async function connection(){
  db = client.db("bibliodb");
  return db;
}

//get requests
// get method to retrieve all books in bookcollection
app.get("/api/books", async (request, response) => {
  let books = await getbooks();
  response.json(books);
})

// get a single book
app.get("/api/books/:id", async (request, response) => {
  const bookId = request.params.id;
  let book = await getSingleBook(bookId);
  response.json(book);
})


// get method to retrieve all authors in authorcollection
app.get("/api/authors", async (request, response) => {
  let authors = await getauthors();
  response.json(authors);
})

// get a single author
app.get("/api/authors/:id", async (request, response) => {
  const authorId = request.params.id;
  let author = await getSingleAuthor(authorId);
  response.json(author);
})



//function to retrieve one book by its id
async function getSingleBook(id){
  db = await connection();
  const bookId = { _id: new ObjectId(String(id)) };
  const result = await db.collection("bookcollection").findOne(bookId);
  return result;
}
//function to retrieve one author by its id
async function getSingleAuthor(id){
  db = await connection();
  const authorId = { _id: new ObjectId(String(id)) };
  const result = await db.collection("authorcollection").findOne(authorId);
  return result;
}

//db collections
async function getbooks(){
  db = await connection();
  let results = db.collection("bookcollection").find({});
  let res = await results.toArray();
  return res;
}

async function getauthors(){
  db = await connection();
  let results = db.collection("authorcollection").find({});
  let res = await results.toArray();
  return res;
}