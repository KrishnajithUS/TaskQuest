/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className="flex w-full flex-col text-center  justify-center">

                <div className='border-2 border-white mb-2'>
                    <a href="#" className="px-4 py-2 text-sm block" role="menuitem">Home</a>
                </div>


                <div className='border-2 border-white mb-2'>
                    <a href="#" className="px-4 py-2 text-sm block" role="menuitem">Profile</a>
                </div>
                <div className='border-2 border-white mb-2'>
                    <a href="#" className="px-4 py-2 text-sm block" role="menuitem">Task</a>
                </div>


                <div className='border-2 border-white'>
                    <a href="#" className="px-4 py-2 text-sm block" role="menuitem">Logout</a>
                </div>

            </div>
        </>
    )
}

export default Sidebar