// src/components/FeedPage.js
import React, { useState, useEffect } from 'react';
import FeedPost from '../FeedPost/FeedPost';
import './FeedPage.css'; 
import postsData from '../../data/posts'; // Assuming you have a posts data file

const FeedPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        
        setPosts(postsData);
    }, []);

    return (
        <div className="feed-container ">
            {posts.map((post, index) => (
                <FeedPost key={index} post={post} />
            ))}
        </div>
    );
};

export default FeedPage;