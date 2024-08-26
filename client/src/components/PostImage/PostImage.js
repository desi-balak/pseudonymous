import React from 'react';
import './PostImage.css'; // Import custom CSS for PostImage

const PostImage = ({ imageUrls }) => {
    return (
        <div className="post-images">
            {imageUrls.map((url, index) => (
                <img key={index} src={url} alt={`Post image ${index}`} className="img-fluid" />
            ))}
        </div>
    );
};

export default PostImage;