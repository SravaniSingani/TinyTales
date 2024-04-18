import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import "./layout.css";
export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      let response = await fetch("http://localhost:8888/api/books");
      let data = await response.json();
      setBooks(data);
    }
    getBooks();
  }, []);

  return (
    <div className="bookContainer">
      {books.map((book) => (
          <Link to={`/book/${book._id}`} key={book._id}>
          <div className="bookCard" key={book._id}>
              <div className="bookCard-img">
              <img src={book.coverImageURL} alt=""/>
              </div>
              <div className="bookCard-text">
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
              </div>
          </div>
          </Link>
      ))}
    </div>
  );
}