import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "../Pages/Register"
import Login from "../Pages/Login"
import Home from '../Pages/Admin/Home';
import Userhome from '../Pages/User/Home';
import { AuthProvider } from "../Context/AuthContext";
import Logout from '../Pages/Logout/logout';
import AdminPrivate from './Privaterouter/AdminPrivate';
import UserPrivate from './Privaterouter/UserPrivate';


const router = () => {
  return (

    <>
      <AuthProvider>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<AdminPrivate />}>
            <Route path="/adminhome" element={<Home />} />
          </Route>
          <Route element={<UserPrivate />}>
            <Route path="/userprofile" element={<Userhome />} />
          </Route>
          <Route path="/logout" element={<Logout />} />

        </Routes >
      </AuthProvider>

    </>
  )

}
export default router