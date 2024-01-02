import React, { useState, useEffect } from 'react';
import Nav from '../utils/nav';
import { Link } from 'react-router-dom';

export default function Home() {
    const [connect, updateConnect] = useState('Connect');
    const [defaultOption, setDefaultOption] = useState('join');

    const BORDER_VAR = "border-gray-800";

    const handleButtonClick = (option: string) => {
        setDefaultOption(option === 'join' ? 'join' : 'host');
        console.log(defaultOption);
        
    };

    useEffect(() => {
        const opts = document.getElementsByClassName('x1');
        const optsArray = Array.from(opts);

        const handleButtonClick = (event: any) => {
            if (event.target.classList.contains(BORDER_VAR)) {
                event.target.classList.remove(BORDER_VAR);
            } else {
                event.target.classList.add(BORDER_VAR);
            }
            setDefaultOption(event.target.id === 'optfor_join' ? 'join' : 'host');
        };

        const addEventListeners = () => {
            if (optsArray && optsArray.length > 0) {
                optsArray.forEach((element) => {
                    element.addEventListener('click', handleButtonClick);
                });
            }
        };

        addEventListeners();

        return () => {
            if (optsArray && optsArray.length > 0) {
                optsArray.forEach((element) => {
                    element.removeEventListener('click', handleButtonClick);
                });
            }
        };
    }, []);

    return (
        <>
            <Nav />
            <div className="p-4 space-y-1 flex justify-center">
                <div className="bg-gradient-to-r from-gray-800 shadow-xl to-gray-900 p-6 rounded-lg shadow-md w-full max-w-[400px]">
                    <h2 className="text-white text-2xl font-bold mb-4">Choose Mode</h2>
                    <div className="flex p-2">
                        <button
                            type="button"
                            id="optfor_join"
                            className={`x1 w-1/2 ${defaultOption === 'join' ? BORDER_VAR : ''} bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-sm rounded-tl-md rounded-bl-md focus:outline-none border-4 border-white`}
                            onClick={() => handleButtonClick('join')}
                        >
                            Join
                        </button>
                        <button
                            type="button"
                            id="optfor_host"
                            className={`x1 w-1/2 ${defaultOption === 'host' ? BORDER_VAR : ''} bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-sm rounded-tr-md rounded-br-md focus:outline-none border-4 border-white`}
                            onClick={() => handleButtonClick('host')}
                        >
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
                            placeholder='Your Username by Default.'
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
    );
}