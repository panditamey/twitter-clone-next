import React from 'react'
import UserInputField from './UserInputField'
import Tweet from './Tweet'

async function Hero() {
    const res = await fetch(process.env.URL + '/api/tweets',{
        // cache: 'cache',
    });
    const data = await res.json();
    return (
        <div className="flex flex-col w-[45%] max-lg:w-full ">
            <h1 className='font-extrabold py-10 text-xl pl-5 bg-opacity-5 border-y border-gray-800'>Home</h1>
            <UserInputField />
            <div >
                {
                    data.tweets.map((tweet: any,index:number) => (
                        <Tweet key={tweet.id} tweet={tweet}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Hero