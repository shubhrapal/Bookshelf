import React from 'react'
import { useAppContext } from '../Context';

const Favourites = () => {

    const { favourites, addToFavourites, removeFromFavourites } = useAppContext();

    console.log('favourites are', favourites);

    const favouritesChecker = (id) => {
        const boolean = favourites.some((book) => book.id === id);

        return boolean;
    };
    return <div className='favourites'> {favourites.length > 0 ? favourites.map((book) => (
        <div key={book.id} className="books">
            <div><h3>{book.title}</h3></div>
            <div> <img src={book.image_url} alt="#" /></div>
            <div>
                {favouritesChecker(book.id) ? (<button onClick={() => removeFromFavourites(book.id)}>remove From Favourites</button>
                ) : (

                    <button className="b" onClick={() => addToFavourites(book)}>Add to favourites</button>)}

            </div>
        </div>
    )) : <p className="added">You have not added any book to favourites yet!</p>}</div>
}




export default Favourites;
