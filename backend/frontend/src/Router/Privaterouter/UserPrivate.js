import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'



const UserPrivate = () => {
    const data = JSON.parse(localStorage.getItem("userDetails"))
    return (
        data === null ? <Navigate to='/' /> : data.is_admin === false ? <Outlet /> : <Navigate to='adminhome/'/>
    )
}

export default UserPrivate