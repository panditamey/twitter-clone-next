import React from 'react'
import { AiFillHome, AiOutlineSearch, AiOutlineMore } from 'react-icons/ai'
import { PiBellLight } from 'react-icons/pi'
import { HiOutlineMail } from 'react-icons/hi'
import { RiFileListLine } from 'react-icons/ri'
import { FaRegBookmark } from 'react-icons/fa'
import { BsPeople } from 'react-icons/bs'
import { IoPersonOutline } from 'react-icons/io5'
import { CiCircleMore } from 'react-icons/ci'
import AvatarComponent from './AvatarComponent'
import Link from 'next/link'

function Menu() {
    return (
        <>
            <div className='sticky top-0 border-gray-800 border-r h-screen lg:w-[25%] max-lg:hidden pl-24 pr-5 py-4'>
                <div className='flex flex-col space-y-2 mt-5'>
                    <svg className='h-7 w-7 ml-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#ffffff"></path>
                    </svg>
                    <button className="bg-black hover:bg-gray-900 text-white items-center text-center flex justify-start font-bold py-2 px-4 rounded-full">
                        <AiFillHome className='h-7 w-7 flex flex-row mr-5' />  Home
                    </button>
                    <button className="bg-black hover:bg-gray-900 text-white items-center text-center flex justify-start font-bold py-2 px-4 rounded-full">
                        <AiOutlineSearch className='h-7 w-7 flex flex-row mr-5' />  Explore
                    </button>
                    <button className="bg-black hover:bg-gray-900 text-white items-center text-center flex justify-start font-bold py-2 px-4 rounded-full">
                        <PiBellLight className='h-7 w-7 flex flex-row mr-5' />  Notifications
                    </button>
                    <button className="bg-black hover:bg-gray-900 text-white items-center text-center flex justify-start font-bold py-2 px-4 rounded-full">
                        <HiOutlineMail className='h-7 w-7 flex flex-row mr-5' />  Messages
                    </button>
                    <button className="bg-black hover:bg-gray-900 text-white items-center text-center flex justify-start font-bold py-2 px-4 rounded-full">
                        <RiFileListLine className='h-7 w-7 flex flex-row mr-5' />  Lists
                    </button>
                    <button className="bg-black hover:bg-gray-900 text-white items-center text-center flex justify-start font-bold py-2 px-4 rounded-full">
                        <FaRegBookmark className='h-7 w-7 flex flex-row mr-5' />  Bookmarks
                    </button>
                    <button className="bg-black hover:bg-gray-900 text-white items-center text-center flex justify-start font-bold py-2 px-4 rounded-full">
                        <BsPeople className='h-7 w-7 flex flex-row mr-5' />  Communities
                    </button>
                    <button className="bg-black hover:bg-gray-900 text-white items-center text-center flex justify-start font-bold py-2 px-4 rounded-full">
                        <svg className='h-7 w-7 mr-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#ffffff"></path>
                        </svg>  Premium
                    </button>
                    <button className="bg-black hover:bg-gray-900 text-white items-center text-center flex justify-start font-bold py-2 px-4 rounded-full">
                        <IoPersonOutline className='h-7 w-7 flex flex-row mr-5' />  Profile
                    </button>
                    <button className="bg-black hover:bg-gray-900 text-white items-center text-center flex justify-start font-bold py-2 px-4 rounded-full">
                        <CiCircleMore className='h-7 w-7 flex flex-row mr-5' />  More
                    </button>

                    <button className="bg-[#1D9BF0] hover:bg-[#4a9bca] text-white font-bold py-2 px-4 rounded-full">
                        Post
                    </button>
                    <div className='pt-24 flex flex-row '>
                        <AvatarComponent name="ASD F" size={50} />
                        <div className='flex flex-col ml-5'>
                            <h1 className='font-bold'>ASDF</h1>
                            <span className='font-mono text-sm text-gray-500'>@amey_pandit</span>
                        </div>
                        <Link href="#"><AiOutlineMore className='h-7 w-7 flex flex-row mr-5 ml-10 hover:text-gray-600'/></Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu