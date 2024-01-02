import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="text-white font-extrabold text-lg">Quix</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="text-white hover:text-gray-300 text-sm transition duration-300">Home</Link>
                        <Link to="/you" className="text-white hover:text-gray-300 text-sm transition duration-300">You</Link>
                        <Link to="https://github.com/itsshreyashk/quix" className="text-white hover:text-gray-300 text-sm transition duration-300"><span className="material-symbols-outlined p-2 px-0">code</span></Link>
                        {/* Add more links as needed */}
                    </div>
                </div>
            </nav>
        </>
    )
}
