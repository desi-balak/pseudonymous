// src/components/PostActions.js
import React from 'react';

const PostAction = ({ postId }) => {
    const handleLike = () => {
        // Implement the like functionality
        console.log(`Liked post ${postId}`);
    };

    const handleRetweet = () => {
        // Implement the retweet functionality
        console.log(`Retweeted post ${postId}`);
    };

    return (
        <div className="post-actions flex space-x-4">
            <button onClick={handleLike} className="text-blue-500 hover:underline">
                Like
            </button>
            <button onClick={handleRetweet} className="text-blue-500 hover:underline">
                Retweet
            </button>
        </div>
    );
};

export default PostAction;