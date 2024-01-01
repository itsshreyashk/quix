import React, { useState, useEffect } from 'react'
import Nav from '../utils/nav'


/* How it will work?
- A POST request will be sent to the server containing the requested quiz ID. If it will be available then the server shall return 'OK' or else it should dismiss the request.
If the server respond with a OK, a passkey will be sent to the client for connecting (the passkey was created by the quiz admin at the time of creating the quiz). The whole quiz will be hosted on /quiz_id/pass=PASS_KEY.
Any user therefore cannot connect the game multiple times and bots will be prevented. Once reached the max limit, the server shall respond with response "MAX" and it will be displayed.

*/
export default function Home() {
    const [connect, updateConnect] : any = useState('Connect'); //will update connect to connecting while searching for a group.
    useEffect(() => {

      return () => {
      }
    }, [])
    
    return (
        <>
            <Nav />
            {/* Actual connect */}
            <div className="p-4">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
                    <h2 className="text-white text-2xl font-bold mb-4">Connect to Quiz</h2>
                    <div className="mb-4 space-y-2">
                        <label htmlFor="quizId" className="text-white block mb-2">Quiz ID:</label>
                        <input
                            type="text"
                            id="quizID"
                            placeholder='In the format RXY349.1'
                            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <label htmlFor="quizId" className="text-white block mb-2">Display Name:</label>
                        <input
                            type="text"
                            id="quizId"
                            placeholder='Setup name for your Character'
                            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md focus:outline-none">
                        {connect}
                    </button>
                </div>
            </div>

        </>
    )
}
