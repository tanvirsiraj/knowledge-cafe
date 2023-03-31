import React, { useEffect, useState } from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import Programmer from '../../Programmer/Programmer';
import './Programming.css'

const Programming = () => {
    const [data, setData] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const addReadTimeToDashBoard = (blog) => {
        let newTime = [];
        newTime = [...time, blog];
        setTime(newTime);
    }
    // console.log(time);

    return (
        <div className='programming-container container row row-cols-1 row-cols-md-2 mx-auto'>
            <div className="programmers col-sm-12 col-md-8">
                {
                    data.map(data => <Programmer key={data.id} data={data} addReadTimeToDashBoard={addReadTimeToDashBoard}></Programmer>)
                }
            </div>
            <div className="dashboard col-sm-12 col-md-4">
                <Dashboard blogs={time}></Dashboard>
            </div>
        </div>
    );
};

export default Programming;