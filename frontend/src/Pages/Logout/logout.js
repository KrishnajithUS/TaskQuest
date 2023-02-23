import React, { useEffect } from "react";
import useAxios from "../../Axios/AxiosInstance/useAxios";
import { useNavigate } from "react-router-dom";
export default function Logout() {
    const axiosInstance = useAxios()
    
    const navigate = useNavigate()
    const logout = async ()=>{
        await axiosInstance.post(`logout/`)
    }

    useEffect(() => {
        logout()
        localStorage.removeItem('AuthToken')
        localStorage.removeItem('userDetails')
        axiosInstance.defaults.headers['Authorization'] = null
        navigate("/")
    })
    return <div>Logout</div>
}