import React, {Component} from 'react'
import BookList from './BookList';
import { Link } from 'react-router-dom';




export default class books extends Component {

render(){
        return (
            <>
            <div >
                <div>
                 <center><Link to="/favourites"><h3 className='mybook'>MY FAVOURITES</h3></Link></center>
                 </div>
            </div>
            <div>
                <div className='ty'>
                    <h1 className='searchBooks'></h1>
                    <div className='container'>
                        <BookList />
                    </div>
                </div>
            </div>
            </>
        )
        }

    }
