import React, { useState, useEffect } from "react";
import { API_URL } from './API';
import axios from 'axios';
import { useAppContext } from "./Context";
import { useNavigate } from "react-router-dom";



const BookList = () => {

    const [books, setBooks] = useState([])

    const { favourites, addToFavourites, removeFromFavourites } = useAppContext();

    const navigate = useNavigate();

    const favouritesChecker = (id) => {
        const boolean = favourites.some((book) => book.id === id);

        return boolean;
    };

    useEffect(() => {
        axios
            .get(API_URL)
            .then((res) => {
                console.log(res.data);
                setBooks(res.data);
            })
            .catch((err) => console.log(err));
    }, []);



    return (
        <div>  
             <center>  
        <div className="book-list">
       
            {books.map((book) => (
                <div key={book.id} className="books">
                    <div><h3>{book.title}</h3></div>
                    <div><img src={book.image_url} alt="#" onClick={() => navigate(`/books/${book.id}`)} /></div>
                    <div>
                        {favouritesChecker(book.id) ? (<button onClick={() => removeFromFavourites(book.id)}>remove From Favourites</button>
                        ) : (
                            <button className="b" onClick={() => addToFavourites(book)}>Add to favourites</button>)}
                             
                    </div>
                 
                </div>
            ))}
        </div>
        </center> 
        </div>
    );
};

export default BookList;