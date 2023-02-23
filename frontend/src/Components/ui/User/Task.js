import React, { useState, useEffect } from 'react'
import useAxios from '../../../Axios/AxiosInstance/useAxios'
const Task = () => {
  const axiosinstance = useAxios()
  const [listapp, setListApp] = useState([])
  const response = async () => {
    try {
      const Response = await axiosinstance.get(`/taskview/`)
      console.log(Response.data)
      setListApp(Response.data)
    } catch (err) {
      alert(err)
    }
  }
  useEffect(() => {
    response()
  },[])
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
                  <div className='hover:cursor-pointer text-bold text-green-500'>Task Completed</div>
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

export default Task