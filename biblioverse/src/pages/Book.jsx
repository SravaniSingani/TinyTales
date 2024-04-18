import React from 'react';
import { Link } from 'react-router-dom';
import "./main.css";
import EachBook from '../components/EachBook';
import Books from './Books';

export default function Book() {
    return (
        <div>
            <div id='backBooks'>
              <Link to="/books">Back To Books</Link>
            </div>
            <div id='books-context'>
               <div id='bookList'>
                 <EachBook />
               </div>
               
            </div>
        </div>
    );
}