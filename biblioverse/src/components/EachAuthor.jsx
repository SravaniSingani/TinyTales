import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./layout.css";
export default function EachAuthor() {
  const [author, setAuthor] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getAuthor = async () => {
      let response = await fetch(`http://localhost:8888/api/authors/${id}`);
      let data = await response.json();
      setAuthor(data);
    }
    getAuthor();
  }, [id]);

  return (
    <div className="eachauthorContainer">
      {author &&(

        <div className="eachauthorCard" key={author._id}>
        <div id="img-container">
            <img src={author.imageURL} alt=""/>
        </div>
        <div className="authorCard-text">
            <h3 id="author-name">{author.authorName}</h3>
            <h4>Birth Year: {author.birthYear}</h4>
            <h4>Nationality: {author.nationality}</h4>
            <p>Bio: {author.bio}</p>
        </div>
        </div>
      )}
    </div>
    
  );
}