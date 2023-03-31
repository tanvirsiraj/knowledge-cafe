import React from 'react';
import './Programmer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


const Programmer = (props) => {
    const { authorName, blogTitle, coverImage, authorImage, readTime, publishDate } = props.data;
    const addReadTimeToDashBoard = props.addReadTimeToDashBoard;
    return (
        <div className='programmer-block mb-5'>
            <img className='cover-img' src={coverImage} alt="" />
            <div className="programmer-details">
                <div className="personal-info">
                    <img className='author-img' src={authorImage} alt="" />
                    <div>
                        <h3>{authorName}</h3>
                        <span>{publishDate}</span>
                    </div>
                </div>
                <div>
                    <span className='reading-time'>{readTime} min read</span>
                    <FontAwesomeIcon className='book-mark' icon={faBookmark} />
                </div>
            </div>
            <h1 className="blog-title">
                {blogTitle}
            </h1>
            <button onClick={() => addReadTimeToDashBoard(props.data)} className='mark-read'>Mark as read</button>
        </div>
    );
};

export default Programmer;