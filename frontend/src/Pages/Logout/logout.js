import React, { useEffect } from "react";
import useAxios from "../../Axios/AxiosInstance/useAxios";
import { useNavigate } from "react-router-dom";
export default function Logout() {
    const axiosInstance = useAxios()

    const navigate = useNavigate()
    useEffect(() => {

        localStorage.removeItem('AuthToken')
        localStorage.removeItem('userDetails')
        axiosInstance.defaults.headers['Authorization'] = null
        console.log("i am log out")
        navigate("/")
    })
    return <div>Logout</div>
}