/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="flex w-full flex-col text-center  justify-center">

                <div className='border-2 border-white mb-2'>
                    <a href="#" className="px-4 py-2 text-sm block" role="menuitem">Home</a>
                </div>


                <div className='border-2 border-white mb-2'>
                    <a href="#" className="px-4 py-2 text-sm block" role="menuitem">Add Apps</a>
                </div>
                <div className='border-2 border-white'>
                    <Link to="/logout" className="px-4 py-2 text-sm block" role="menuitem">Logout</Link>
                </div>

            </div>
        </>
    )
}

export default Sidebar