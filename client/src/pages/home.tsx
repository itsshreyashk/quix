import React from 'react'
import Nav from '../utils/nav'
export default function Home() {
    return (
        <>
            <Nav />
            {/* Actual connect */}
            <div className="p-4">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
                    <h2 className="text-white text-2xl font-bold mb-4">Connect to Quiz</h2>
                    <div className="mb-4">
                        <label htmlFor="quizId" className="text-white block mb-2">Quiz ID:</label>
                        <input
                            type="text"
                            id="quizId"
                            placeholder='In the format RXY349.1'
                            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md focus:outline-none">
                        Connect
                    </button>
                </div>
            </div>

        </>
    )
}
