import React, { useEffect, useState } from 'react'
import useAxios from '../../../Axios/AxiosInstance/useAxios'
const Content = () => {
    const [listapp, setListApp] = useState([])
    const [singleData, setSingleData] = useState([])
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
    const handleSubmit = (item) => {
        console.log(item)
        setSingleData(item)
    }
    useEffect(() => {
        response()
    }, [])
    if (singleData.id) {
        return (
            <div className='flex flex-col bg-slate-700 ' >


                <div className='flex items-center justify-between px-4 bg-slate-700 w-50 h-full mb-4' >
                    <div className='flex flex   justify-between items-center '>
                        <div className='w-full mt-10 flex flex-col justify-center items-center'>
                            <img className='object-cover w-[full] h-[100px]' alt='img' src={`${singleData.image}`} />
                            <div className='text-center'>
                                <a className='text-sm hover:text-green-500' href={singleData.link}>{singleData.link}</a>
                            </div>
                        </div>

                    </div>
                    <div className=''>
                        <div >
                            <button className="md:w-full  w-[80%] border border-white py-2 px-5 hover:font-bold bg-green-600 hover:bg-green-800 text-sm md:text-xl text-center" type="submit" >{singleData.points} Points</button>

                        </div>
                    </div>
                </div>




            </div>
        )
    }
    return (
        <div className='flex flex-col bg-slate-900 ' >

            {
                listapp.map((item) => {
                    return (
                        <div key={item.id} className='flex items-center justify-between px-4 bg-slate-700 w-50 h-[100px] mb-4' >
                            <div className='flex  justify-between items-center '>
                                <div className=''>
                                    <img className='w-full h-20' alt='img' src={`${item.image}`} />
                                </div>
                                <div className='ml-4'>
                                    <span>{item.name}</span>
                                    <div onClick={() => handleSubmit(item)} className='hover:cursor-pointer text-green-500'>view Details</div>
                                </div>
                            </div>
                            <div>
                                <div >
                                    <button className="w-full border border-white py-2 px-5 hover:font-bold bg-green-600 hover:bg-green-800  text-xl text-center" type="submit" >{item.points} Points</button>

                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Content