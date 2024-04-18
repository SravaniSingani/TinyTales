import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import "./layout.css";
export default function AuthorList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const getAuthors = async () => {
      let response = await fetch("http://localhost:8888/api/authors");
      let data = await response.json();
      setAuthors(data);
    }
    getAuthors();
  }, []);

  return (
    <div className="authorContainer">
      {authors.map((author) => (
       <Link to={`/author/${author._id}`} key={author._id}>
           <div className="authorCard" key={author._id}>
            <h3 id="author-name">{author.authorName}</h3>
            <div id="img-container">
              <img src={author.imageURL} alt=""/>
            </div>
          </div>
       </Link>
      ))}
    </div>
  );
}