import React from 'react';
import { Link } from 'react-router-dom';
import "./main.css";
import BookList from '../components/BookList';

export default function Books() {
    return (
        <div>
            <div id='books-context'>
            <h3 id='books-context-head'>"The magic of a book is that it can transport you to the coziest places, even from the comfort of your own home."</h3>
            <h2 id='book-head'>Book Collection</h2>
                
               <div id='bookList'>
                 <BookList />
               </div>
               
            </div>
        </div>
    );
}