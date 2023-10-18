import React from 'react'
import AvatarComponent from './Menu/AvatarComponent'
import { IoMdImage } from 'react-icons/io'
import { MdOutlineGifBox } from 'react-icons/md'
import { LiaPollHSolid } from 'react-icons/lia'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { AiOutlineCalendar } from 'react-icons/ai'

function UserInputField() {
    return (
        <div className='p-5 flex flex-row items-center border-b border-gray-800'>
            <AvatarComponent name='ASD F' size={50} />
            <div className='w-full' flex-col>
                <textarea className=' w-full px-5 text-gray-400 font-bold bg-black outline-none' placeholder='What is happening ?!' />

                <div className='flex flex-row mx-7 justify-between'>
                    <div className='flex flex-row  space-x-2'>
                        <IoMdImage className='h-6 w-6 text-[#1D9BF0]' />
                        <MdOutlineGifBox className='h-6 w-6 text-[#1D9BF0]' />
                        <LiaPollHSolid className='h-6 w-6 text-[#1D9BF0]' />
                        <HiOutlineEmojiHappy className='h-6 w-6 text-[#1D9BF0]' />
                        <AiOutlineCalendar className='h-6 w-6 text-[#1D9BF0]' />
                    </div>

                    <button className="bg-[#1D9BF0] hover:bg-[#4a9bca] text-white font-bold py-2 px-4 rounded-full">
                        Post
                    </button>
                </div>
            </div>

        </div>
    )
}

export default UserInputField