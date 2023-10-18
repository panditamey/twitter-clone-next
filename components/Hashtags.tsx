import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function Hashtags() {
    return (
        <div className='sticky top-0 border-gray-800	border-l h-screen w-[30%] pr-24 pl-5 py-4 flex flex-col'>
                <div className='relative inset-y-8 pl-5  flex items-center pointer-events-none'>
                    <AiOutlineSearch className='w-5 h-5  text-gray-400' />
                </div>
                <input
                    type="text"
                    className='h-10 pl-14 rounded-full bg-gray-800 text-gray-400 focus:bg-black outline-none focus:outline-[#1D9BF0] focus:text-white'
                    placeholder='Search Twitter'
                />
        </div>
    )
}

export default Hashtags