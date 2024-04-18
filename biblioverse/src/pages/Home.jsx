import React from 'react';
import { Link } from 'react-router-dom';
import "./main.css";

export default function Home() {
    return (
        <div>
            <div id='hero'>
                <div id='hero-text'>
                <p id='quote'>"Books are a uniquely portable magic." - Stephen King</p>
                 <h2 id='hero-title'>Discover our virtual bookshelf</h2>
                 <p id='hero-desc'>All your favourites book collections at one place. Get lost in a world of words and discover your next great read.</p>
                 <div id='hero-btn'>
                    <Link to="/Books" className='button-link'>Find Books</Link>
                 </div>
                </div>

                <div id='heroimg'>
                   <img src='./src/assets/hero-img.png' alt='' id='hero_img' />
                </div>
            </div>

            <div id='about'>
                <div id='aboutContainer'>
                    <h3 id='about-head'>ABOUT US</h3>
                    <p>Our bookstore was founded by a group of avid readers who wanted to create a space where book lovers could explore, discover, and share their love for literature.
                    Our mission is to inspire and empower readers of all ages by providing a diverse selection of books, fostering a love of reading, and supporting local authors and communities.
                    </p>
                    <p>At our bookstore, we value inclusivity, creativity, and the transformative power of storytelling. We believe that books have the power to educate, entertain, and enlighten, and we're committed to sharing that magic with our customers.</p>
                </div>

                <div id='pageContainer'>
                    <div id='bookRedirect'>
                        <h3>Find your next page-turner</h3>
                        <p>Check out our curated selection of featured books, handpicked by our team of passionate readers. From bestsellers to hidden gems, there's something for everyone.</p>
                        <div id='hero-btn'>
                            <Link to="/Books" className='button-link'>See Books</Link>
                        </div>
                    </div>
                    <div id='authorRedirect'>
                        <h3>Explore our talented authors</h3>
                        <p>Get to know some of our featured authors, whose works have captured the hearts and imaginations of readers around the world.</p>
                        <div id='hero-btn'>
                            <Link to="/Authors" className='button-link'>See Authors</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}