import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Programmer from '../Programmer/Programmer';
import './Programming.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Programming = () => {
    const [data, setData] = useState([]);
    const [time, setTime] = useState([]);
    const [bookMark, setBookMark] = useState([]);

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

    const handleBookMark = (blog) => {
        const duplicateBookMark = bookMark.find(bookMark => bookMark.id === blog.id);
        if (duplicateBookMark) {
            // console.log('already  bookMarked');
            toast.warn('Already  Bookmarked', {
                theme: "dark"
            });
            let newBookMark = [];
            newBookMark = [...bookMark, blog];
            setBookMark(newBookMark);
        }
        else {
            let newBookMark = [];
            newBookMark = [...bookMark, blog];
            setBookMark(newBookMark);
        }

    }

    console.log(bookMark)
    // console.log(time);

    return (
        <div className='programming-container container row row-cols-1 row-cols-md-2 mx-auto'>
            <div className="programmers col-sm-12 col-md-8">
                {
                    data.map(data => <Programmer key={data.id} data={data} addReadTimeToDashBoard={addReadTimeToDashBoard} handleBookMark={handleBookMark}></Programmer>)
                }
            </div>
            <div className="dashboard col-sm-12 col-md-4">
                <Dashboard blogs={time} bookMark={bookMark} ></Dashboard>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Programming;