// src/components/FeedPost.js
import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import PostDate from '../PostDate/PostDate';
import PostText from '../PostText/PostText';
import PostAction from '../PostAction/PostAction';
import PostImage from '../PostImage/PostImage';
import './FeedPost.css'

const FeedPost = ({ post }) => {
    return (
        <div className="feed-post border rounded-lg p-4 mb-4 shadow-md">
            {/* User Information */}
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                 <UserInfo username={post.username} profileImage={post.profileImage} />
                 <span className="mx-2">•</span>
                 <PostDate date={post.date} />
              </div>
            </div>
            {/* Post Content */}
            <div className="post-content">
            <PostText text={post.text} />
            {post.imageUrls && post.imageUrls.length > 0 && (
                    <PostImage imageUrls={post.imageUrls} />
                )}
            </div>

            {/* Post Footer */}
            <div className="post-footer mt-2 flex justify-between items-center">
                <PostAction likesCount={post.likesCount} commentsCount={post.commentsCount} />
            </div>
        </div>
    );
};

export default FeedPost;