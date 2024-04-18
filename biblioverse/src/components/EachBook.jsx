import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./layout.css";
export default function EachBook() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getBook = async () => {
      //let response = await fetch(`http://localhost:8888/api/books/${id}`);
      let response;
      if(import.meta.env.DEV){
        response = await fetch(`http://localhost:8888/api/books/${id}`);
      }
      else{
         response = await fetch(`https://tinytales.onrender.com/api/books/${id}`);
      }
      let data = await response.json();
      setBook(data);
    }
    getBook();
  }, [id]);

  return (
    <div className="eachbookContainer">
      {book &&(

          <div className="eachbookCard" key={book._id}>
              <div className="eachbookCard-img">
              <img src={book.coverImageURL} alt=""/>
              </div>
              <div className="eachbookCard-text">
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
                <p>{book.description}</p>
              </div>
              
          </div>
      )}
    </div>
    
  );
}