import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs when page loads
  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs")
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  // Delete a blog
  const deleteBlog = (id) => {
    axios.delete(`http://localhost:5000/api/blogs/${id}`)
      .then(() => {
        setBlogs(blogs.filter(blog => blog._id !== id)); // remove from state
      })
      .catch(error => {
        console.error("Error deleting blog:", error);
      });
  };

  return (
    <div className="container">
      <h2>All Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs yet. Add one!</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p><i>By: {blog.author}</i></p>
            
            {/* Edit button */}
            <Link to={`/edit/${blog._id}`}>
              <button className="edit-btn">Edit</button>
            </Link>

            {/* Delete button */}
            <button className="delete-btn" onClick={() => deleteBlog(blog._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
