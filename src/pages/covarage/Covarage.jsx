import React from 'react';

const Covarage = () => {
    return (
        <div className=" mt-4 mb-8 bg-[#ffffff] shadow-sm rounded-xl">
            <div className=" lg:px-20 lg:py-15 md:px-15  mg:py-10 px-8 py-4 ">
                <div className="text-start space-y-3">
                    <h1 className="md:text-5xl text-2xl font-extrabold dark:text-[#03373D]">We are available in 64 districts</h1>
                </div>
                {/* input */}
                <div className='text-start space-y-4 items-center flex-1 '>
                    {/* serch section  */}
                    <div className="lg:w-1/2 flex items-center lg:my-10 md:my-6 my-3">
                        <label className="input w-3/4 ">
                            <svg className="h-[1em] opacity-50 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input className=' ' type="search" required placeholder="Search tracking code here" />
                        </label>
                        <input type="button" name="search" value='Search' id="" className='text-[#1f1f1f] font-bold text-lg rounded-md ml-1 bg-[#CAEB66] py-2 px-4.5' />
                    </div>
                    <div className=" border border-b  border-solid border-[#00000010] lg:my-6 md:my-4 my-2"></div>
                    <h1 className="md:text-3xl text-xl font-extrabold dark:text-[#03373D] mb-6">We are available in 64 districts</h1>
                    {/* mag image  */}
                    <div className="">
                        <img className='object-cover' src="https://i.ibb.co.com/pBKD253N/Frame-2087326253.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Covarage;