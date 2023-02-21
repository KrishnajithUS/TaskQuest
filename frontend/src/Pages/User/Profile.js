import React from 'react'
import Sidebar from '../../Components/ui/User/Sidebar'
import UserProfile from '../../Components/ui/User/Profile'

const Profile = () => {
    return (
        <div className='min-h-screen bg-slate-900 text-white '>
            <div className='md:p-4 p-10'>
                <div className='font-bold text-2xl pt-2 text-center mb-8'>
                    <h1>Hello User</h1>
                </div>

                <div className='w-full'>
                    <div className='grid grid-cols-8 gap-4 '>
                        <div className='md:col-start-1  md:col-end-3 col-start-3 col-end-7'>
                            <Sidebar />
                        </div>
                        <div className=' col-span-full md:col-start-3 md:col-end-9 '>
                            <UserProfile />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Profile