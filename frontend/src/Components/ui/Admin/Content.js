import React from 'react'

const Content = () => {
    return (
        <div className='m-4 '>
            <div className='flex md:justify-evenly justify-center m-4'>
                <img alt="img" className='md:w-[50%]  h-full' src='https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg' />
            </div>
            <div className='grid grid-cols-6  justify-items-center gap-2'>
                <div className='md:col-span-3 col-span-full'>
                    <input name="password" placeholder="App Link" className="block w-full md:w-full p-2.5" />
                </div>
                <div className='md:col-span-3 col-span-full'>
                    <input name="" placeholder="Add App" className="block w-full md:w-full p-2.5" />
                </div>
                <div className='md:col-span-3 col-span-full'>
                    <select id="countries" className="p-2 border border-gray-300 text-white bg-slate-900 text-sm  ">
                        <option selected>Select a category</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className='md:col-span-3 col-span-full'>
                    <select id="countries" className="p-2 border border-gray-300 text-white bg-slate-900 text-sm    ">
                        <option selected>Select a sub category</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className='col-span-full md:mt-2'>
                    <div className='flex w-full justify-center' >
                        <button className="w-full py-2 px-5 hover:font-bold bg-green-600 hover:bg-green-800  text-xl text-center" type="submit" >Submit</button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Content