import React from 'react'
import Nav from '../utils/nav';

const Display: any = () => {
    return (
        <>
            <Nav />
            <div className="w-screen p-4 flex justify-center">
                <div className="w-full max-w-[500px] bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl px-6 py-4">
                    <div className="flex justify-center p-4">
                        <div className="profile_img w-12 h-12 rounded-full border p-2 bg-blue-500"></div>
                    </div>
                    <div className="p-2 text-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-bold">Shreyash</span>
                            <span className="text-sm font-bold">#123456</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <span className="text-sm font-semibold">Age:</span>
                                <span className="text-sm">25</span>
                            </div>
                            <div>
                                <span className="text-sm font-semibold">Gender:</span>
                                <span className="text-sm">Male</span>
                            </div>
                            <div>
                                <span className="text-sm font-semibold">Number:</span>
                                <span className="text-sm">+1 (123) 456-7890</span>
                            </div>
                        </div>
                        {/* Add other profile details here */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Display;