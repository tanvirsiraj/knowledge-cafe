import React from 'react';
import './Programming.css'

const Programming = () => {
    return (
        <div className='programming-container container row row-cols-sm-1 row-cols-md-2 mx-auto'>
            <div className="programmers col-8">
                <h1>Programmer details</h1>
            </div>
            <div className="dashboard col-4">
                <h3>Spent time on read: </h3>
            </div>
        </div>
    );
};

export default Programming;