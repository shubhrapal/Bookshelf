import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Front.css';
import Books from './Books';
import AboutUs from './AboutUs';
import UserPage from './UserPage';
import Favourites from './images/Favourites';
import BookDetails from './BookDetails';
import Rating from './Rating';


export default class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/Home' element={<AboutUs />} />
          <Route path='/Bookshelf/books' element={<Books />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route exact path='/Bookshelf' element={<UserPage />} />
          <Route path='/Bookshelf/books/favourites' element={<Favourites />} />
          <Route path='/Bookshelf/books/:id' element={<BookDetails />} />
          <Route path='/rating' element={<Rating />} />
          <Route path='/loginpage' element={<loginPage />} />
        </Routes>
      </>
    )
  }
}


