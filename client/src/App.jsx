// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import HomePage from "./pages/HomePage.jsx";
// import TaskPage from "./pages/TaskPage.jsx";
// import LoginPage from "./pages/LoginPage.jsx"

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/tasks" element={<TaskPage />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import HomePage from "./pages/HomePage.jsx";
// import TaskPage from "./pages/TaskPage.jsx";
// import LoginPage from "./pages/LoginPage.jsx";
// import RegisterPage from "./pages/RegisterPage.jsx";

// function App() {
//   const isLoggedIn = !!localStorage.getItem("token"); // check token

//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
//         <Route path="/tasks" element={isLoggedIn ? <TaskPage /> : <Navigate to="/login" />} />
//         <Route path="/login" element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />} />
//         <Route path="/register" element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/" />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
        />

        <Route
          path="/tasks"
          element={isLoggedIn ? <TaskPage /> : <Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <LoginPage setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/register"
          element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
