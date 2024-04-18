import React from 'react';
import { Link } from 'react-router-dom';
import "./main.css";
import AuthorList from '../components/AuthorList';

export default function Authors() {
    return (
        <div>
            <div id='authors-context'>
                <p id='author-quote'>"Authors are the architects of worlds unseen, the navigators of realms unexplored, and the weavers of tales that illuminate the human soul."</p>
                <h2 id='author-head'>List Of Authors</h2>

               <div id='authorList'>
                 <AuthorList />
               </div>
               
            </div>
        </div>
    );
}