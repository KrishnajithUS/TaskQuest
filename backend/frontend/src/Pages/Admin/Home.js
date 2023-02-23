import React, { useState } from 'react'
import Sidebar from '../../Components/ui/Admin/Sidebar'
import Content from '../../Components/ui/Admin/Content'
import ListApps from '../../Components/ui/Admin/ListApps'

const Home = () => {
    const [show, setshow] = useState(null)
    console.log(show)
    return (
        <div className='min-h-screen bg-slate-900 text-white '>
            <div className='md:p-4 p-10'>
                <div className='font-bold text-2xl pt-2 text-center mb-8'>
                    <h1>Hello Admin</h1>
                </div>

                <div className='w-full'>
                    <div className='grid grid-cols-8 gap-4 '>

                        <div className='md:col-start-1  md:col-end-3 col-start-3 col-end-7'>
                            <Sidebar show={show} setshow={setshow} />
                        </div>
                        {show === "listapps" ?
                            <div className=' col-span-full md:col-start-3 md:col-end-9 bg-slate-600'>
                                <ListApps />


                            </div>
                            :

                            <div className=' col-span-full md:col-start-3 md:col-end-9 bg-slate-600'>
                                <Content />
                            </div>}

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home