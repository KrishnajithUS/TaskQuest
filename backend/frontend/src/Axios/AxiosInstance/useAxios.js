import axios from 'axios'
import { useContext } from 'react'

const baseURL = 'http://44.199.195.231/api/'


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
