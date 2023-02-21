import React from 'react'

const Content = () => {
    return (
        <div className='flex flex-col ' >

            <div className='flex items-center  justify-end px-4 bg-slate-700 w-50 h-[100px] mb-4' >
                <div>
                    <img src='' />
                </div>
                <div>
                    <div >
                        <button className="w-full border border-white py-2 px-5 hover:font-bold bg-green-600 hover:bg-green-800  text-xl text-center" type="submit" >Submit</button>

                    </div>
                </div>
            </div>

            <div className='flex items-center  justify-end px-4 bg-slate-700 w-50 h-[100px] mb-4' >
                <div>
                    <img src='' />
                </div>
                <div>
                    <div >
                        <button className="w-full py-2 border border-white px-5 hover:font-bold bg-green-600 hover:bg-green-800  text-xl text-center" type="submit" >Submit</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content