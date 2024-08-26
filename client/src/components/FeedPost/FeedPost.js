// src/components/FeedPost.js
import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import PostDate from '../PostDate';
import PostText from '../PostText/PostText';
import PostAction from '../PostAction';
import PostImage from '../PostImage/PostImage';

const FeedPost = ({ post }) => {
    return (
        <div className="feed-post border rounded-lg p-4 mb-4 shadow-md">
            {/* User Information */}
            <UserInfo username={post.username} profileImage={post.profileImage} />

            {/* Post Content */}
            <div className="post-content">
            <PostText text={post.text} />
            {post.imageUrls && post.imageUrls.length > 0 && (
                    <PostImage imageUrls={post.imageUrls} />
                )}
            </div>

            {/* Post Footer */}
            <div className="post-footer mt-2 flex justify-between items-center">
                <PostDate date={post.date} />
                <PostAction postId={post.id} />
            </div>
        </div>
    );
};

export default FeedPost;