import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts';
import './PostList.css'; // Create this CSS file for styling

const PostList = () => {
  return (
    <div className="post-list">
      <h1>Blog Posts</h1>
      <div className="card-container">
        {posts.map(post => (
          <div key={post.id} className="card">
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/post/${post.id}`} className="read-more">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
