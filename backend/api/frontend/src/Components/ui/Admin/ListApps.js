import React, { useEffect, useState } from 'react'
import useAxios from '../../../Axios/AxiosInstance/useAxios'
const ListApps = () => {
    const [listapp, setListApp] = useState([])
    const axiosinstance = useAxios()
    const response = async () => {
        try {
            const Response = await axiosinstance.get(`/listview/`)
            console.log(Response.data)
            setListApp(Response.data)
        } catch (err) {
            alert(err)
        }
    }
    useEffect(() => {
        response()
    }, [])
    return (
        <div className='flex flex-col bg-slate-900 ' >

            {
                listapp.map((item) => {
                    return (
                        <div className='flex items-center  justify-between px-4 bg-slate-700 w-50 h-[100px] mb-4' >
                            <div className='flex flex-col justify-items-between items-center '>
                                <div className=''>
                                    <img className='w-20 h-20' alt='img' src={`${item.image}`} />
                                </div>
                                <div className=''>
                                    <span>{item.name}</span>
                                </div>
                            </div>
                            <div>
                                <div >
                                    <button className="w-full border border-white py-2 px-5 hover:font-bold bg-green-600 hover:bg-green-800  text-xl text-center" type="submit" >{item.points}</button>

                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default ListApps