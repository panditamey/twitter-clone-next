import React from 'react'
import AvatarComponent from './Menu/AvatarComponent'
import { FaRegComment } from 'react-icons/fa'
import { BiRepost } from 'react-icons/bi'
import { IoHeartSharp, IoHeartOutline, IoStatsChartSharp, IoShareOutline } from 'react-icons/io5'

interface TweetProps {
    tweet: any;
}

function Tweet({ tweet }: TweetProps) {
    return (
        <div className='flex flex-row px-5 mt-5 border-b border-gray-800'>
            <AvatarComponent name='ASD F' size={50} />
            <div className='flex flex-col ml-5 w-full '>
                <div className='flex flex-row space-x-2'>
                    <h1 className='font-bold'>Amey Pandit</h1>
                    <h2 className='font-mono text-gray-500'>@amey_pandit</h2>
                </div>
                <p className='text-justify text-sm'>
                    {tweet.tweet}
                </p>
                {tweet.image == null ? null :
                    <img className='my-5 h-fit w-fit max-h-80 rounded-xl border border-white' src={tweet.image} alt="" />
                }
                <div className='flex flex-row justify-between p-5'>
                    <span className='flex flex-row space-x-2'><FaRegComment className='h-5 w-5 text-gray-500' /> <h6>{tweet.comments.length}</h6></span>
                    <span className='flex flex-row space-x-2'><BiRepost className='h-5 w-5 text-gray-500' /> <h6>{tweet.retweets}</h6></span>
                    <span className='flex flex-row space-x-2'><IoHeartOutline className='h-5 w-5 text-gray-500' /> <h6>{tweet.likes}</h6></span>
                    <span className='flex flex-row space-x-2'><IoStatsChartSharp className='h-5 w-5 text-gray-500' /> <h6>{tweet.views}</h6></span>
                    <span className='flex flex-row space-x-2'><IoShareOutline className='h-5 w-5 text-gray-500' /></span>

                </div>
            </div>
        </div>
    )
}

export default Tweet