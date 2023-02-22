import React, { useState } from 'react'
import { useFormik } from 'formik';
import useAxios from '../../../Axios/AxiosInstance/useAxios'
import ImageUploader from './ImageUploader';

const Content = () => {
    const [imageFile, setImageFile] = useState(null);
    const formData = new FormData()
    const handleFile = async (args) => {
        setImageFile(args);
        console.log(args)
    }
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const axiosinstance = useAxios()
    const initialValues = {
        name: '',
        link: '',
        category: '',
        sub_category: '',
        points: 0,
    };
    const {
        handleChange,
        handleSubmit, values, errors } = useFormik({
            initialValues,
            onSubmit: async (values, action) => {
                console.log(FormData, "formdata")
                formData.append('name', values.name)
                formData.append('link', values.link)
                formData.append('category', category)
                formData.append('sub_category', subCategory)
                formData.append('points', values.points)
                formData.append('image', imageFile);

                try {
                    const response = await axiosinstance.post(`/createview/`, formData)
                    console.log(response)
                    setImageFile(null)
                    if (response.status === 201) {
                        alert("task created successfully")
                    }
                } catch (error) {
                    alert(error)
                }
                action.resetForm();

            }
        })
    return (
        <div className='m-4 '>
            {imageFile ? <div className='flex  justify-center m-4 h-full'>

                <img alt="img" className='mt-4 md:w-[80%] h-full' src={URL.createObjectURL(imageFile)} />

            </div>
                :
                <div className='flex  justify-center m-4'>
                    <img alt="img" className='md:w-[80%]  h-full' src='https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg' />
                </div>
            }

            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-6  justify-items-center gap-4'>
                    <div className='col-span-full'>
                        <ImageUploader handleFile={handleFile} />
                    </div>
                    <div className='md:col-span-3 col-span-full'>
                        <input type="text" onChange={handleChange} name="link" value={values.link} placeholder="Enter App Link" className="block bg-slate-900 w-full md:w-full p-2.5" required />
                    </div>
                    <div className='md:col-span-3 col-span-full'>
                        <input name="name" onChange={handleChange} value={values.name} type='text' placeholder="Enter App Name" className="block bg-slate-900 w-full md:w-full p-2.5" required />
                    </div>
                    <div className='md:col-span-3 col-span-full'>
                        <select onChange={(e) => setCategory(e.target.value)} id="countries" className="p-2 block  w-full md:w-full border border-gray-300  text-white bg-slate-900 text-sm  " required>
                            <option selected>Select a category</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Education">Education</option>
                            <option value="Job">Job</option>
                            <option value="Movies">Movies</option>
                        </select>
                    </div>
                    <div className='md:col-span-3 col-span-full'>
                        <select onChange={(e) => setSubCategory(e.target.value)} id="countries" className="p-2 block  w-full md:w-full border border-gray-300 text-white bg-slate-900 text-sm    " required>
                            <option selected>Select a sub category</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Programming">Udemy</option>
                            <option value="Freelancing">UpWork</option>
                            <option value="Action">Netflix</option>
                        </select>
                    </div>
                    <div className=' col-span-full md:mt-4'>
                        <div className=''>
                            <input type='number' placeholder="Enter Points" onChange={handleChange} name="points" value={values.points} placeholder="Add Points" className="text-center bg-slate-900 block w-full md:w-full p-2.5" required />
                        </div>
                    </div>
                    <div className='col-span-full md:mt-2'>
                        <div className='flex w-full justify-center' >
                            <button type="submit" className="w-full py-2 px-5 hover:font-bold bg-green-600 hover:bg-green-800  text-xl text-center" type="submit" >Submit</button>

                        </div>
                    </div>
                </div>
            </form >

        </div >
    )
}

export default Content