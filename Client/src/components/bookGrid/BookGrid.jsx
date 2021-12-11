import React from 'react'
import './BookGrid.scss'

function BookGrid({title, author, status}) {
    return (
        <div className="book_grid">
            <div className="image">
            </div>
            <div className="details">
                <div className="title">{ title }</div>
                <div className="author">{ author }</div>
                <div className="status">{ status }</div>
            </div>
        </div>
    )
}

export default BookGrid
