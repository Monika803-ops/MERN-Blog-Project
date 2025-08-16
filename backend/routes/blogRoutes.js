const express = require("express");
const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require("../controllers/blogController");

const router = express.Router();

router.post("/", createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);   // GET single blog by ID
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
