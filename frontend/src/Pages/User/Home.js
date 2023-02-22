import React, { useState } from 'react'
import Sidebar from '../../Components/ui/User/Sidebar'
import Content from '../../Components/ui/User/Content'
import Profile from '../../Components/ui/User/Profile'
import Task from '../../Components/ui/User/Task'
const Home = () => {
    const [show, setshow] = useState(null)

    return (
        <div className='min-h-screen bg-slate-900 text-white '>
            <div className='md:p-4 p-10'>
                <div className='font-bold text-2xl pt-2 text-center mb-8'>
                    <h1>Hello User</h1>
                </div>

                <div className='w-full'>
                    <div className='grid grid-cols-8 gap-4 '>
                        <div className='md:col-start-1  md:col-end-3 col-start-3 col-end-7'>
                            <Sidebar show={show} setshow={setshow} />
                        </div>
                        {show === null ?
                            <div className=' col-span-full md:col-start-3 md:col-end-9'>
                                <Content />
                            </div> :
                            show === "profile" ?
                                <div className=' col-span-full md:col-start-3 md:col-end-9 '>
                                    <Profile />
                                </div> : show === 'task' ?
                                    <div className=' col-span-full md:col-start-3 md:col-end-9 '>
                                        <Task />
                                    </div>
                                    :
                                    ''
                        }
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Home