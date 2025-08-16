import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css"; // Import the CSS for styling

function Home() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/blogs/${id}`);
      fetchBlogs();
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  return (
    <div className="container">
      <h1>My Blogs</h1>
      <Link to="/add" className="add-btn">Add Blog</Link>

      {blogs.map((blog) => (
        <div key={blog._id} className="blog-card">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <div>
            <button className="edit-btn" onClick={() => navigate(`/edit/${blog._id}`)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => handleDelete(blog._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
