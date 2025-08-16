

# MERN Blog Project

## Overview

This is a *Personal Blog Platform* built using the *MERN stack (MongoDB, Express.js, React.js, Node.js)*.  
Users can *add, view, edit, and delete blog posts*, making it a complete CRUD application.

---

## Features

- Add new blog posts with *title, content, and author*.  
- View all blogs on the *Home page*.  
- Edit existing blog posts.  
- Delete blogs.  
- Data is stored in *MongoDB Atlas*.  
- Fully connected *Frontend (React) → Backend (Express + Node) → MongoDB*.  

---

## Tools & Technologies Used

- *Frontend*: React.js, Axios, React Router  
- *Backend*: Node.js, Express.js, Mongoose, CORS  
- *Database*: MongoDB Atlas  
- *Testing*: Postman for API testing  
- *Code Editor*: VS Code  
- *Version Control*: Git & GitHub  


---

## Steps I Followed to Build the Project

### 1. Setup Backend
1. Created a folder backend inside project.  
2. Initialized Node.js project:  
   ```bash
   npm init -y

3. Installed dependencies:

npm install express mongoose cors nodemon


4. Created server.js with:

Express server setup

MongoDB connection

Simple GET route for testing



5. Added start script in package.json:

"scripts": {
  "start": "nodemon server.js"
}


6. Tested backend by running:

npm start




---

2. Setup Frontend

1. Created React app in frontend folder:

npx create-react-app frontend


2. Installed dependencies:

npm install axios react-router-dom


3. Created pages:

Home.js → List all blogs

AddBlog.js → Form to add blog

EditBlog.js → Form to edit blog



4. Created component:

BlogList.js → Display blogs with edit/delete buttons



5. Connected frontend to backend using Axios.




---

3. MongoDB Setup

1. Created MongoDB Atlas account.


2. Created cluster and database.


3. Made Blog collection.


4. Copied connection string and added in server.js:

mongoose.connect("your_mongodb_atlas_url")




---

4. CRUD Implementation

Add Blog: POST request to backend from AddBlog.js.

View Blogs: GET request in Home.js to display all blogs.

Edit Blog: PUT request from EditBlog.js.

Delete Blog: DELETE request from BlogList.js button.



---

5. Testing

Tested all APIs in Postman:

Add, view, edit, delete blogs


Verified changes in MongoDB Atlas.

Tested frontend in browser:

Add blog → appears on home page

Edit blog → updates correctly

Delete blog → removed from page




---

6. GitHub Setup

1. Created GitHub repo mern-blog.


2. Initialized git locally:

git init


3. Added .gitignore to ignore node_modules/ and .env.


4. Pushed code to GitHub:

git add .
git commit -m "Initial commit: MERN blog project"
git push origin main




---

How to Run the Project Locally

1. Clone the repo

git clone https://github.com/username/mern-blog.git
cd mern-blog

2. Setup Backend

cd backend
npm install

Create a .env file with your MongoDB URI:


MONGODB_URI=your_mongodb_atlas_url

npm start

Backend runs on http://localhost:5000


3. Setup Frontend

cd ../frontend
npm install
npm start

Frontend runs on http://localhost:3000



---

Screenshots 

##This is the Home page

![Home Page](images/Home.png)


##This is the Add Blog page

![Add Blog Page](images/Add_Blog.png "This is the Add Blog page")


##This is the Edit page
![Edit Blog Page](images/Edit_Blog.png)




---

Outcome

Fully working MERN Blog Platform

Able to add, view, edit, delete blogs

Connected frontend → backend → MongoDB

Tested API with Postman and frontend in browser



---

