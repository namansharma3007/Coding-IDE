import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import IDE from "./pages/IDE";
import Submissions from "./pages/Submissions";
import { UserProvider } from "./context/userContext"; 
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  
  
  // for disabling mouse right click
  useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', disableRightClick);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);




  return (
    <UserProvider>
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Navbar />
              <IDE />
            </PrivateRoute>
          }
        />
        <Route
          path="/submissions"
          element={
            <PrivateRoute>
              <Navbar />
              <Submissions />
            </PrivateRoute>
          }
        />
      </Routes>
    </UserProvider>
  );
};

export default App;
