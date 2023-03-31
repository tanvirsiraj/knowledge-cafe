import React from 'react';
import './Dashboard.css';

const Dashboard = (props) => {
    const { blogs } = props;
    // console.log(blog)
    let readTime = 0;
    for (const blog of blogs) {
        readTime = readTime + blog.readTime;
    }
    return (
        <div className='dashboard-inside'>
            <h3 className='time-calculation'>Spent time on read: {readTime} min</h3>
            <div className="bookMarked-blogs">
                <h3>Bookmarked Blogs : </h3>
            </div>
        </div>
    );
};

export default Dashboard;