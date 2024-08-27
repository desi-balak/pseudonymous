// src/components/PostActions.js
import React from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import PostDate from '../PostDate/PostDate';
import './PostAction.css'

const PostAction = ({likesCount, commentsCount}) => {
    const handleLike = () => {
        // Implement the like functionality
        console.log(`Liked post }`);
    };

    const handleComment = () => {
        // Implement the retweet functionality
        console.log(`Retweeted post }`);
    };

    return (
        <div className="post-footer">
        <div className="icon" onClick={handleLike}>
            <FaHeart />
            <span className="like-count">{likesCount}</span>
        </div>
        <div className="icon" onClick={handleComment}>
            <FaComment />
            <span className="comment-count">{commentsCount}</span>
        </div>
    </div>
    );
};

export default PostAction;