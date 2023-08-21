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
          <Route path='/Books' element={<Books />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/' element={<UserPage />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/books/:id' element={<BookDetails />} />
          <Route path='/rating' element={<Rating />} />
          <Route path='/loginpage' element={<loginPage />} />
        </Routes>
      </>
    )
  }
}


