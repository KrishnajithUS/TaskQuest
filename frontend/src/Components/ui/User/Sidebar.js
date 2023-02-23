/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ show, setshow }) => {
    const handleSubmit = () => {
        setshow('profile')
    }
    const handleSubmitN = () => {
        setshow(null)
    }
    const handleSubmitNL = () => {
        setshow('task')
    }
    const handleSubmitNLL = () => {
        setshow('points')
    }

    return (
        <>
            <div className="flex w-full flex-col text-center  justify-center">

                <div onClick={handleSubmitN} className='border-2 border-white mb-2'>
                    <a href="#" className="px-4 py-2 text-sm block" role="menuitem">Home</a>
                </div>


                <div onClick={handleSubmit} className='border-2 border-white mb-2'>
                    <a href="#" className="px-4 py-2 text-sm block" role="menuitem">Profile</a>
                </div>
                <div onClick={handleSubmitNL} className='border-2 border-white mb-2'>
                    <a href="#" className="px-4 py-2 text-sm block" role="menuitem">Task</a>
                </div>
                <div onClick={handleSubmitNLL} className='border-2 border-white mb-2'>
                    <a href="#" className="px-4 py-2 text-sm block" role="menuitem">Points</a>
                </div>

                <div className='border-2 border-white'>
                    <Link to="/logout" className="px-4 py-2 text-sm block" role="menuitem">Logout</Link>
                </div>

            </div>
        </>
    )
}

export default Sidebar