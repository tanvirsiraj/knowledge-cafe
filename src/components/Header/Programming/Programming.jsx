import React, { useEffect, useState } from 'react';
import Programmer from '../../Programmer/Programmer';
import './Programming.css'

const Programming = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='programming-container container row row-cols-sm-1 row-cols-md-2 mx-auto'>
            <div className="programmers col-8">
                <Programmer></Programmer>
            </div>
            <div className="dashboard col-4">
                <h3>Spent time on read: </h3>
            </div>
        </div>
    );
};

export default Programming;