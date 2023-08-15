import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind', id: 1},
        {title: 'the way of kings', id: 2},
        {title: 'the final empire', id: 3},
        {title: 'the hero of ages', id: 4},
        {title: 'the second empire', id: 5},
        {title: 'blue wind', id: 6},
        {title: 'toys in the atic', id: 7},
        {title: 'diamonds', id: 8},
        {title: 'sapphire', id: 9},
        {title: "The Pilgrim's Progress", id: 10},
        {title: 'Robinson Crusoe', id: 11},
        {title: 'Gullivers Travels', id: 12},
        {title: 'Frankenstein-XXVXIIII', id: 13},
    ]);
    const handleDelete = (id) => {
        const revisedBooks = books.filter((book) => {
            return book.id !== id;
        })
        console.log(revisedBooks);
        setBooks(revisedBooks);
    }
    return (
        <BookContext.Provider value={{books, handleDelete}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;
