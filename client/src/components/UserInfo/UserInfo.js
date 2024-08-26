// src/components/UserInfo.js
import React from 'react';
import './UserInfo.css'; // Import custom CSS

const UserInfo = ({ username, profileImage }) => {
    return (
        <div className="user-info d-flex align-items-center mb-2">
            <div className="profile-image-container me-2">
                <img 
                    src={profileImage} 
                    alt={`${username}'s profile`} 
                    className="rounded-circle"
                />
            </div>
            <span className="username">@{username}</span>
        </div>
    );
};

export default UserInfo;
