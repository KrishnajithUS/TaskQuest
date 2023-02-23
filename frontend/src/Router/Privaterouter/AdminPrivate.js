import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


const AdminPrivate = () => {
    const data = JSON.parse(localStorage.getItem("userDetails"))
    const FAuth = Boolean(data?.is_admin)
    return (
        FAuth ? <Outlet /> : <Navigate to='/' />
    )
}

export default AdminPrivate