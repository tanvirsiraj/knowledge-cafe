import React from 'react';
import BookMark from '../BookMark/BookMark';
import './Dashboard.css';

const Dashboard = (props) => {
    const { blogs, bookMark } = props;
    // console.log(blog)
    let readTime = 0;
    for (const blog of blogs) {
        readTime = readTime + blog.readTime;
    }
    return (
        <div className='dashboard-inside'>
            <h3 className='time-calculation'>Spent time on read: {readTime} min</h3>
            <div className="bookMarked-blogs">
                <h3>Bookmarked Blogs : {bookMark.length}</h3>
                {
                    bookMark.map(bookMark => <BookMark bookMark={bookMark} key={bookMark.id}></BookMark>)
                }
            </div>
        </div>
    );
};

export default Dashboard;