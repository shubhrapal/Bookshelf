import React, { Component } from 'react';
import booksup2 from './images/booksup2.jpeg';
import LoginPage from './LoginPage';


export default class UserPage extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <ul>
              <label className='booki'>BookShelf
              </label>
            </ul>
            <img className='readings' src={booksup2} alt='' />
          </div>
          <div>
            <h3 className='success'>TO SUCCEED<br></br>YOU MUST READ!</h3>
          </div>
        <LoginPage/>
        </div>
      </div>
    )
  }
} 
