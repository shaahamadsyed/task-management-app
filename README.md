Task Management Web Application 
Full Stack MERN Project Report 
1. Introduction 
1.1 Project Title 
Task Management Web Application 
1.2 Project Overview 
The Task Management Web Application is a full-stack web platform developed using the 
MERN technology stack (MongoDB, Express.js, React.js, and Node.js). The system 
enables users to efficiently manage their daily activities through secure authentication 
and structured task organization. 
The application allows users to register accounts, log in securely, and perform core task 
operations such as creating, viewing, updating, and deleting tasks through a responsive 
and intuitive user interface. 
The project emphasizes secure communication between frontend and backend 
systems, optimized user experience, and scalable architecture suitable for future 
enhancements. 
1.3 Project Objectives 
The primary objectives of this project include: 
• Implementing secure user authentication using JSON Web Tokens (JWT) 
• Providing efficient task management functionality 
• Designing a responsive and user-friendly interface 
• Ensuring seamless frontend-backend communication through REST APIs 
• Deploying the application using modern cloud hosting platforms 
1.4 Target Users 
The system is designed for: 
• Individuals managing personal daily tasks 
• Small teams coordinating work assignments 
• Developers learning full-stack MERN application development 
2. System Features 
2.1 User Authentication 
• User Signup and Registration 
• Secure Login and Logout 
• JWT-based authentication system 
• Password hashing using bcrypt.js 
• Protected user sessions 
2.2 Task Management (CRUD Operations) 
• Create new tasks 
• View task lists 
• Edit existing tasks 
• Delete completed or unnecessary tasks 
2.3 Secure Protected Routes 
• Access to task functionality is restricted to authenticated users 
• Backend authorization middleware ensures security 
2.4 Responsive User Interface 
• Mobile-friendly layout 
• Desktop optimized design 
• Clean and intuitive navigation 
2.5 API Integration 
• Axios used for API communication 
• Centralized API service implementation 
• Structured request-response handling 
2.6 Deployment 
• Frontend deployed on Vercel 
• Backend hosted on Render 
• Database hosted on MongoDB Atlas 
3. Technologies Used 
3.1 Frontend Technologies 
• React.js – Component-based UI development 
• React Router DOM – Client-side routing 
• Axios – API communication 
• Bootstrap / React Bootstrap – Styling and UI components 
• Vite – Fast frontend build tool 
3.2 Backend Technologies 
• Node.js – Server runtime environment 
• Express.js – Backend framework 
• MongoDB Atlas – Cloud-hosted NoSQL database 
• Mongoose – Database modeling and schema design 
• JSON Web Token (JWT) – Secure authentication 
• bcrypt.js – Password encryption 
• dotenv – Environment variable management 
• cors – Cross-origin resource sharing 
3.3 Deployment & Tools 
• Vercel – Frontend deployment 
• Render – Backend deployment 
• MongoDB Atlas – Database hosting 
• GitHub – Version control and collaboration 
4. System Architecture Overview 
The application follows a three-tier architecture: 
Presentation Layer 
• React.js frontend 
• Handles UI rendering and user interactions 
Application Layer 
• Express.js backend server 
• Handles API requests, authentication, and business logic 
Data Layer 
• MongoDB Atlas database 
• Stores users and task data securely 
Data flows from the frontend through REST APIs to the backend server, which interacts 
with the database and returns structured JSON responses. 
5. Deployment Links 
• Live Application: 
https://task-management-app-chi-lemon.vercel.app 
• Backend API: 
https://task-management-api-31wz.onrender.com 
• GitHub Repository: 
https://github.com/shaahamadsyed/task-management-app 
6. Local Setup Instructions 
6.1 Prerequisites 
• Node.js installed 
• npm installed 
• MongoDB Atlas account 
• Git installed 
6.2 Backend Setup 
Navigate to backend directory: 
cd backend 
npm install 
Create .env file: 
MONGO_URI=************************ 
JWT_SECRET=******************* 
PORT=8000 
Start backend server: 
npm start 
Backend runs at: 
http://localhost:8000 
6.3 Frontend Setup 
cd client 
npm install 
npm run dev 
Frontend runs at: 
http://localhost:5173 
7. Testing and Bug Fixes 
7.1 Functional Testing 
• Verified user registration and login workflows 
• Tested JWT authentication and authorization 
• Validated task creation, editing, and deletion 
• Confirmed protected route access control 
7.2 API Testing 
• Used browser DevTools Network tab 
• Verified HTTP status responses 
• Checked Authorization header usage 
7.3 UI Testing 
• Tested responsiveness across devices 
• Verified navigation and routing flow 
• Validated form inputs and error handling 
7.4 Major Bug Fixes 
• Corrected incorrect frontend API endpoint URLs 
• Resolved Vercel build configuration issues 
• Fixed registration API errors 
• Implemented centralized Axios API service 
8. Future Enhancements 
Planned improvements include: 
• Dark mode interface 
• Task reminder notifications 
• Analytics dashboard with productivity insights 
• Drag-and-drop task management 
• Team collaboration and shared workspaces 
• Performance optimization using lazy loading 
9. Conclusion 
The Task Management Web Application demonstrates a complete full-stack MERN 
implementation with secure authentication, scalable architecture, and modern 
deployment practices. The system provides users with a practical and efficient solution 
for managing daily tasks while showcasing real-world software development workflows. 
The project also highlights strong integration between frontend and backend 
technologies, RESTful API design, and cloud-based deployment, making it suitable for 
further expansion into a collaborative productivity platform.
