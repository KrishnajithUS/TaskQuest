import axios from 'axios'
import { useContext } from 'react'

const baseURL = 'http://localhost:8000/api/'


const useAxios = () => {

    const token = localStorage.getItem("AuthToken") ? (localStorage.getItem("AuthToken")) : null
    const axiosinstance = axios.create({
        baseURL,

        headers: {
            Authorization: token ? `Bearer ${token}` : null,
        },

    }
    )
    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem("AuthToken") ? (localStorage.getItem("AuthToken")) : null
        config.headers.Authorization = token ? `Bearer ${token}` : null

        return config;
    });

    return axiosinstance
}

export default useAxios
