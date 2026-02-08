📝 Task Management Web Application
Full Stack MERN Project

📌 Introduction

📖 Project Overview

The Task Management Web Application is a full-stack web platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
It enables users to securely manage daily activities through authentication and structured task organization.

Users can:

Register accounts

Log in securely

Create, view, update, and delete tasks

Manage tasks through a responsive UI

The project focuses on:

Secure frontend–backend communication

Scalable architecture

Optimized user experience

🎯 Project Objectives

Implement secure authentication using JWT

Provide efficient task management functionality

Design a responsive UI

Enable seamless REST API communication

Deploy using modern cloud platforms

👥 Target Users

Individuals managing personal tasks

Small teams coordinating work

Developers learning MERN stack

⚙️ System Features

🔐 User Authentication

User Signup & Registration

Secure Login & Logout

JWT-based authentication

Password hashing using bcrypt.js

Protected sessions

✅ Task Management (CRUD)

Create tasks

View task lists

Edit tasks

Delete tasks

🛡️ Protected Routes

Task access restricted to authenticated users

Backend authorization middleware

📱 Responsive UI

Mobile-friendly design

Desktop optimized layout

Clean navigation

🔗 API Integration

Axios for API communication

Centralized API service

Structured request-response handling

🚀 Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

🧰 Technologies Used

🎨 Frontend

React.js

React Router DOM

Axios

Bootstrap / React Bootstrap

Vite

🖥️ Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

JSON Web Token (JWT)

bcrypt.js

dotenv

cors

☁️ Deployment & Tools

Vercel

Render

MongoDB Atlas

GitHub

🏗️ System Architecture

🖼️ Presentation Layer

React.js frontend

Handles UI and user interactions

⚙️ Application Layer

Express.js backend

API handling, authentication, business logic

🗄️ Data Layer

MongoDB Atlas

Secure storage for users and tasks

Data flows through REST APIs from frontend → backend → database with JSON responses.

🔗 Deployment Links

🌐 Live App:
https://task-management-app-chi-lemon.vercel.app

🔌 Backend API:
https://task-management-api-31wz.onrender.com

💻 GitHub Repository:
https://github.com/shaahamadsyed/task-management-app

🧪 Local Setup Instructions

📋 Prerequisites

Node.js

npm

MongoDB Atlas account

Git

🔧 Backend Setup
cd backend
npm install


Create .env file:

MONGO_URI=YOUR_MONGO_URI
JWT_SECRET=YOUR_SECRET_KEY
PORT=8000


Start backend:

npm start


Backend runs on:

http://localhost:8000

🎨 Frontend Setup
cd client
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🧪 Testing & Bug Fixes
✅ Functional Testing

User registration & login workflows

JWT authentication & authorization

Task CRUD operations

Protected routes

🔗 API Testing

Browser DevTools Network tab

HTTP status verification

Authorization header testing

📱 UI Testing

Responsive design testing

Navigation flow validation

Form validation & error handling

🐞 Major Bug Fixes

Corrected frontend API endpoints

Fixed Vercel build issues

Resolved registration API errors

Implemented centralized Axios service

🚧 Future Enhancements

Dark mode

Task reminders

Analytics dashboard

Drag-and-drop task management

Team collaboration

Lazy loading optimization

📌 Conclusion

This project demonstrates a complete MERN full-stack implementation with secure authentication, scalable architecture, and modern deployment practices.

It showcases real-world development workflows, RESTful API design, and cloud deployment while providing a practical task management solution that can evolve into a collaborative productivity platform.
