import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "../Pages/Register"
import Login from "../Pages/Login"
import Home from '../Pages/Admin/Home';
import Userhome from '../Pages/User/Home';
import Userprofile from '../Pages/User/Profile';


const router = () => {
  return (

    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminhome" element={<Home />} />
        <Route path="/userhome" element={<Userhome />} />
        <Route path="/userprofile" element={<Userprofile />} />


      </Routes>
    </>
  )

}
export default router