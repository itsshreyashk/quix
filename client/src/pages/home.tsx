import React, { useState, useEffect } from 'react'
import Nav from '../utils/nav'
import { Link } from 'react-router-dom';

/* How it will work?
- A POST request will be sent to the server containing the requested quiz ID. If it will be available then the server shall return 'OK' or else it should dismiss the request.
If the server respond with a OK, a passkey will be sent to the client for connecting (the passkey was created by the quiz admin at the time of creating the quiz). The whole quiz will be hosted on /quiz_id/pass=PASS_KEY.
Any user therefore cannot connect the game multiple times and bots will be prevented. Once reached the max limit, the server shall respond with response "MAX" and it will be displayed.

*/
export default function Home() {
    const [connect, updateConnect]: any = useState('Connect'); //will update connect to connecting while searching for a group.
    useEffect(() => {

        return () => {
        }
    }, [])

    return (
        <>
            <Nav />
            {/* Actual connect */}
            <div className="p-4 space-y-1 flex justify-center">
                <div className="bg-gradient-to-r from-gray-800 shadow-xl to-gray-900 p-6 rounded-lg shadow-md w-full max-w-[400px]">
                    <h2 className="text-white text-2xl font-bold mb-4">Choose Mode</h2>
                    <div className="flex p-2">
                        <button className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-sm rounded-tl-md rounded-bl-md focus:outline-none">
                            Join
                        </button>
                        <button className="w-1/2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-sm rounded-tr-md rounded-br-md focus:outline-none">
                            Host
                        </button>
                    </div>
                    <div className="mb-4 space-y-3 p-1">
                        <label htmlFor="quizID_join" className="text-white block mb-2 text-sm">Quiz ID</label>
                        <input
                            type="text"
                            id="quizID_join"
                            placeholder='In the format RXY349.1'
                            className="w-full text-sm bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <label htmlFor="name_join" className="text-white block mb-2 text-sm">Display Name</label>
                        <input
                            type="text"
                            id="name_join"
                            placeholder='Setup name for your Character'
                            className="w-full text-sm bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <button className="w-full text-sm bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md focus:outline-none">
                        {connect}
                    </button>
                    <div className="flex items-center pt-4 m-1">
                        <Link to={'/TnC'} className='text-blue-600 text-sm'>Have you read the T&C already?</Link>
                        <button className="text-green-400 ml-2" id="tnc_read">
                            <span className="material-symbols-outlined">done</span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}
