import React, { useState, useEffect } from 'react'
import useAxios from '../../../Axios/AxiosInstance/useAxios'
const Points = () => {
    const [points, setPoints] = useState([])
    const axiosinstance = useAxios()
    const response = async () => {
        try {
            const Response = await axiosinstance.get(`/totalpoints/`)
            console.log(Response.data)
            setPoints(Response.data.total_points)
        } catch (err) {
            alert(err)
        }
    }
    useEffect(() => {
        response()
    })
    return (
        <div className='flex flex-col  bg-slate-900  ' >

            <div className='border-2 text-center p-2 text-2xl font-bold border-slate-100 h-52 min-h-full '>
                <div className='flex flex-col justify-end'>
                    <div>
                        <span>Your Total Points</span>

                    </div>
                    <div className='text-4xl mt-10 font-bold'>
                        {points}
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Points