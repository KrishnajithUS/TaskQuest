import axios from 'axios'
import { useContext } from 'react'

const baseURL = 'http://127.0.0.1:8000/api/'


const useAxios = () => {

    const token = localStorage.getItem("AuthToken") ? (localStorage.getItem("AuthToken")) : null
    const axiosinstance = axios.create({
        baseURL,
      
        headers: {
            Authorization: token ? `Bearer ${token}` : null
        },

    }
    )
    return axiosinstance
}

export default useAxios
