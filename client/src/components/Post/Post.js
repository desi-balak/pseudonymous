import React from 'react'
import UserInfo from '../UserInfo/UserInfo'
import Header from '../Header/Header';

const Post = ({post}) => {
  return (
    <div>
      <Header headline="Post" />
      {/* <div className=''>  
      <UserInfo username={post.username} profileImage={post.profileImage} />   
      </div> */}
    </div>
  )
}

export default Post
