import React, { useState, useEffect } from "react";
import "./App";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BOOK_DETAILS_URL } from "./API";


const BookDetails = () => {
    const [book, setBook] = useState({}); 

    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`${BOOK_DETAILS_URL}/${id}`)
            .then((res) => {
                setBook(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return <div className="bookDetails">
        <div>
            <h2 className="titles">{book.title}</h2>
            <img className="imgbook" src={book.image_url} alt="#" />
        </div>
        <h4 className="rate"> Rating :{book.rating}</h4>
        <div>
            <h2 className="description">Description</h2>
            <p>{book.description}</p>
            <h2 className="authors">Authors</h2>
            <center><p>{book.authors}</p></center>
            <h2 className="genres">Genres</h2>
            <center><p>{book.genres}</p></center> 
        </div>   
    </div>
};



export default BookDetails;