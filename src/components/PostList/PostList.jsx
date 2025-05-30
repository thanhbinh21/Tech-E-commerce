import React from "react";
import { Link } from 'react-router-dom';  // Import Link từ react-router-dom
import './PostList.css';

const PostList = ({ posts }) => {
  return (
    <div className="post-list flex flex-wrap gap-5 justify-start p-5">
      {posts.map((post, index) => (
        <article
          key={index}
          className="post-card w-[340px] h-auto p-4 rounded-lg shadow-lg bg-white transform transition-all duration-300 hover:translate-y-[-5px]"
        >
          <Link to={`subpage${index + 1}` }> {/* Điều hướng đến subpage cụ thể */}
            <img
              src={post.image}
              className="post-image w-full h-auto rounded-lg object-cover"
              alt={post.title}
            />
            <h2 className="post-title text-xl font-bold my-2 text-left text-black">
              {post.title}
            </h2>
            {post.author && (
              <p className="text-base text-left text-black mb-2">Tác giả: {post.author}</p>
            )}
            <p className="text-base text-left text-black leading-6 mt-2">
              {post.description}
            </p>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default PostList;
