import React from 'react';
import './BookMark.css';

const BookMark = (props) => {
    return (
        <div className='bookMark-container'>
            <h3>{props.bookMark.blogTitle}</h3>
        </div>
    );
};

export default BookMark;