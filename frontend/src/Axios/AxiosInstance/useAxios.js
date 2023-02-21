import axios from 'axios'
import { useContext } from 'react'

const baseURL = 'http://127.0.0.1:8000/api/'


const useAxios = () => {
    const token = localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null

    const axiosinstance = axios.create({
        baseURL,
        timeout: 5000,
        headers: {
            Authorization: token ? `Bearer ${token}` : null
        },

    }
    )
    return axiosinstance
}

export default useAxios
