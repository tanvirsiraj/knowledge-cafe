import React, { useEffect, useState } from 'react';
import Dashboard from '../../Dashboard/Dashboard';
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
        <div className='programming-container container row row-cols-1 row-cols-md-2 mx-auto'>
            <div className="programmers col-sm-12 col-md-8">
                {
                    data.map(data => <Programmer key={data.id} data={data}></Programmer>)
                }
            </div>
            <div className="dashboard col-sm-12 col-md-4">
                <Dashboard></Dashboard>
            </div>
        </div>
    );
};

export default Programming;