import React from 'react'
import UserInputField from './UserInputField'
import Tweet from './Tweet'

function Hero() {
    return (
        <div className='flex flex-col w-[45%] mt-10'>

            <h1 className='font-extrabold justify-center text-xl h-20 pl-5 bg-opacity-5 border-b border-gray-800'>Home</h1>
            <UserInputField/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
        </div>
    )
}

export default Hero