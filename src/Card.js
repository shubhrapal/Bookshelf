import React, { Component} from 'react';
import { Link } from 'react-router-dom';



export class Card extends Component {
  render(){
    return (
      <div>
        <Link to='/books'><label className='mbshelf'>
         MY BOOKSHELF
        </label></Link>
      </div>
    )
  }
}

export default Card;




