import React, { useEffect, useState, useCallback } from 'react'
import "./User.css"
import useAxios from '../../../Axios/AxiosInstance/useAxios'
import { useNavigate } from 'react-router-dom'
import ShowImage from './ShowImage'
import DropBox from './DropBox'
const Content = () => {
    const navigate = useNavigate()
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
    const [images, setImages] = useState([]);
    const [imageSent, setImageSent] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.map((file, index) => {
            setImageSent(file)
            const reader = new FileReader();
            reader.onload = function (e) {
                setImages((prevState) => [
                    { id: index, src: e.target.result },
                ]);
            };
            reader.readAsDataURL(file);
            return file;
        });
    }, []);
    const ImageUploader = async () => {
        try {
            const formData = new FormData()
            formData.append("id", singleData.id)
            const value = await axiosinstance.post(`/addappview/`,
                formData
            )
            console.log(value.data)
                
            alert("Task Completed")
            navigate(0)
            
        } catch (err) {
            alert(err)
        }
    }
    const ImageHandler = (e) => {
        e.preventDefault()
        console.log(imageSent, "image sent")
        ImageUploader()
    }
    if (singleData.id) {

        return (
            <div className='flex flex-col bg-slate-700 ' >


                <div className='flex items-center justify-between px-4 bg-slate-700 w-50 h-full mb-4' >
                    <div className='flex flex   justify-between items-center '>
                        <div className='w-full mt-10 flex flex-col justify-center items-center'>
                            <img className='object-cover w-[full] h-[100px]' alt='img' src={`${singleData.image}`} />
                            <div>
                                <span>{singleData.name}</span>
                            </div>
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
                <DropBox onDrop={onDrop} />
                <ShowImage images={images} />
                <form onSubmit={(e)=>ImageHandler(e)
                }>
                    <div className='flex justify-center m-4' >
                        <button type="submit" className="md:w-[50%]  w-[80%] border border-white py-2 px-5 hover:font-bold bg-green-600 hover:bg-green-800 text-sm md:text-xl text-center" type="submit" >Submit Task</button>

                    </div>
                </form>


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