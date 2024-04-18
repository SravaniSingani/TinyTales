import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Books from './pages/Books'
import Authors from './pages/Authors';
import 'boxicons'
import Book from './pages/Book';
import Author from './pages/Author';


function App() {
  return (
    <>
      <Router>
            <>
                <Header />
                <main id='main'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/books" element={<Books />} />
                        <Route path="/authors" element={<Authors />} />
                        <Route path="/book/:id" element={<Book />} /> 
                        <Route path="/author/:id" element={<Author />} /> 
                    </Routes>
                </main>
                <Footer />
            </>
        </Router>
    </>
  )
}

export default App
