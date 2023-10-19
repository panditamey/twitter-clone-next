"use client"
import React, { useRef, useState } from 'react'
import AvatarComponent from './Menu/AvatarComponent'
import { IoMdImage } from 'react-icons/io'
import { MdOutlineGifBox } from 'react-icons/md'
import { LiaPollHSolid } from 'react-icons/lia'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UserInputField() {
    const [tweet, setTweet] = useState('')
    const [image, setImage] = useState(null)
    const [imageURL, setImageURL] = useState(null)

    var handleImage = (e: any) => {
        // setImage(URL.createObjectURL(e.target.files[0]))
        setImage(e.target.files[0])
    }

    async function postTweet() {
        const ref = toast.loading('Tweeting...')
        const formData = new FormData();
        if (image != null) {
            formData.append('file', image);
            //rename the file
            formData.append('upload_preset', 'twitter');
            const imgURL = await fetch(
                `https://api.cloudinary.com/v1_1/ddyu6ziys/image/upload`, {
                method: 'POST',
                body: formData

            }
            )
            const data = await imgURL.json();
            await fetch(process.env.NEXT_PUBLIC_SERVER_URL +'/api/tweets', {
                method: 'POST',
                body: JSON.stringify({
                    "tweet": tweet,
                    "userId": "652e7ec66452c8bef0f7be26",
                    "image": data.url
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res: any) => {
                res.status == 200 ? toast.update(ref, {
                    render: 'Tweeted Successfully!',
                    type: 'success',
                    isLoading: false,
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                }) : toast.update(ref, {
                    render: 'Error Tweeting!',
                    type: 'error',
                    isLoading: false,
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            }).catch((err) => {
                toast.update(ref, {
                    render: err.error,
                    type: 'error',
                    isLoading: false,
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            })
        }
        else {

            await fetch(process.env.NEXT_PUBLIC_SERVER_URL +'/api/tweets', {
                method: 'POST',
                body: JSON.stringify({
                    "tweet": tweet,
                    "userId": "652e7ec66452c8bef0f7be26",
                    "image": null
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res: any) => {
                res.status == 200 ? toast.update(ref, {
                    render: 'Tweeted Successfully!',
                    type: 'success',
                    isLoading: false,
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                }) : toast.update(ref, {
                    render: 'Error Tweeting!',
                    type: 'error',
                    isLoading: false,
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            }).catch((err) => {
                toast.update(ref, {
                    render: err.error,
                    type: 'error',
                    isLoading: false,
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            })

        }


    }


    return (
        <>
            <div className='p-5 flex flex-row items-center border-b border-gray-800'>
                <AvatarComponent name='ASD F' size={50} />
                <div className='w-full'>
                    <textarea onChange={
                        (e) => {
                            setTweet(e.target.value)
                        }
                    }
                        className=' w-full px-5 text-gray-400 font-bold bg-black outline-none' placeholder='What is happening ?!' />

                    <div className='flex flex-row mx-7 justify-between cursor-pointer'>
                        <div className='flex flex-row  space-x-2'>

                            <input
                                type="file"
                                id="file"
                                style={{ display: "none" }}
                                onChange={handleImage}
                            />
                            <label htmlFor="file" >
                                <IoMdImage className='h-6 w-6 text-[#1D9BF0]' />
                            </label>
                            <MdOutlineGifBox className='h-6 w-6 text-[#1D9BF0]' />
                            <LiaPollHSolid className='h-6 w-6 text-[#1D9BF0]' />
                            <HiOutlineEmojiHappy className='h-6 w-6 text-[#1D9BF0]' />
                            <AiOutlineCalendar className='h-6 w-6 text-[#1D9BF0]' />
                        </div>

                        <button onClick={() => {
                            postTweet()
                        }} className="bg-[#1D9BF0] hover:bg-[#4a9bca] text-white font-bold py-2 px-4 rounded-full">
                            Post
                        </button>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </>
    )
}

export default UserInputField