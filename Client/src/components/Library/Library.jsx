import React, { useState } from 'react'
import { useEffect } from 'react';
import endpoints from '../../api/Endpoints'
import axios from '../../api/Axios'
import Header from '../header/Header'
import './Library.scss'
import store from '../../context/Store';
import BookGrid from '../bookGrid/BookGrid';

function Library() {


    const [books, setBooks] = useState([]);

    useEffect(() => {

        console.log(store.getState());
        const token = store.getState().token

        axios.get(endpoints.book.getAllBooks(), {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setBooks(response.data.response);
        })
    })

    return (
        <div className="library">
            <Header />
            <div className="grid_container">
            {
                books.map((book)=> (
                    <BookGrid title={book.title} author={book.author} status={book.rented}/>
                ))
            }
            </div>
        </div>
    )
}




export default Library
