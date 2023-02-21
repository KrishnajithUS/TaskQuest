import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "../Pages/Register"
import Login from "../Pages/Login"
import Home from '../Pages/Admin/Home';
import Userhome from '../Pages/User/Home';
import Userprofile from '../Pages/User/Profile';
import { AuthProvider } from "../Context/AuthContext";
import Logout from '../Pages/Logout/logout';


const router = () => {
  return (

    <>
      <AuthProvider>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminhome" element={<Home />} />
          <Route path="/userhome" element={<Userhome />} />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/logout" element={<Logout />} />

        </Routes >
      </AuthProvider>

    </>
  )

}
export default router