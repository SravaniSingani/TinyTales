import React from 'react';
import { Link } from 'react-router-dom';
import "./main.css";
import EachAuthor from '../components/EachAuthor';
import Authors from './Authors';

export default function Author() {
    return (
        <div>
            <div id='backAuthors'>
              <Link to="/authors">Back To Authors</Link>
            </div>
            <div id='author-context'>
               <div id='authorList'>
                 <EachAuthor />
               </div>
               
            </div>
        </div>
    );
}