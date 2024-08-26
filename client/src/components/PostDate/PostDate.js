// src/components/PostDate.js
import React from 'react';
import moment from 'moment';
import './PostDate.css'

const PostDate = ({ date }) => {
    const formattedDate = moment(date).fromNow(true);

    return (
        <span className="text-gray-600 text-sm">
            {formattedDate}
        </span>
    );
};

export default PostDate;