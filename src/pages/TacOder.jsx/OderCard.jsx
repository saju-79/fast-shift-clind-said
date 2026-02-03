import React from 'react';
import { AiOutlineCheck} from 'react-icons/ai';

const OderCard = () => {
    return (
        <section className="py-10 dark:text-gray-800">
            <div className="container px-4 mx-auto">
                {/* cards */}
                <div className=" grid lg:grid-cols-2 grid-cols-1 gap-3 lg:gap-5">
                    {/* first card */}
                    <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-[#F0F3F6]">
                        <div className="space-y-2">
                            <h4 className="text-2xl text-[#03373D] font-bold">Product details</h4>
                            {/* <span className="text-6xl font-bold">Free</span> */}
                        </div>
                        {/* msg section  */}
                        <div className=" space-y-3 text-md font-medium">
                            <li className="flex  space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className='text-[#000000]'>May 31, 2025 ,03:41 pm</span>
                            </li>
                            <li className="flex  space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className='text-[#000000] font-semibold'>Id : <span className='text-[#00000050]'>148976175</span> </span>
                            </li>
                            <li className="flex  space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className='text-[#000000] font-semibold'>Invoice: <span className='text-[#00000050]'>148976175</span> </span>
                            </li>
                            <li className="flex  space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className='text-[#000000] font-semibold'>Tracking Code :<span className='text-[#00000050]'> 01JWJVEXWZ9823Q7H5H55YV7</span> </span>
                            </li>
                        </div>
                        {/* name section  */}
                        <div className="mt-5 space-y-3 text-md font-medium">
                            <li className="flex  space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className='text-[#000000] font-semibold'>Name: <span className='text-[#00000050]'> Zahid Hossai</span> </span>
                            </li>
                            <li className="flex   space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className='text-[#000000] font-semibold'>Address : <span className='text-[#00000050]'>Madrasha Road, Chandpur sadar, Chandpur, Chandpur, 3600, BD </span> </span>
                            </li>
                            <li className="flex  space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className='text-[#000000] font-semibold'>Phone Number : <span className='text-[#00000050]'> 01780448866 :7</span> </span>
                            </li>
                        </div>
                        {/* prodact section  */}
                        <div className="mt-5 space-y-3 text-md font-medium">
                            <li className="flex  space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className='text-[#000000] font-semibold'>Approved : <span className='text-[#00000050]'> N/A: </span> </span>
                            </li>
                            <li className="flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className='text-[#000000] font-semibold'>Weight :<span className='text-[#00000050]'> KG </span> </span>
                            </li>
                            <li className="flex  space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className='text-[#000000] font-semibold'>COD: <span className='text-[#00000050]'>  ৳ 0</span> </span>
                            </li>
                            <li className="flex  space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className='text-[#C89A01] font-semibold'>Pending </span>
                            </li>

                        </div>

                    </div>
                    {/* secound card */}
                    <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-[#F0F3F6] dark:text-red">
                        <div className="space-y-2">
                            <h4 className="text-2xl text-[#03373D]  font-bold">Tracking Updates</h4>
                        </div>
                        {/* docoument all  */}
                        <div className="flex lg:text-xl md:text-md text-sm  w-full justify-between md:w-full bg:w-full xl:w-3/4 ">
                            <p className='text-[#000000]'>Jun 02, 2025 <br /> 12:21 am</p>
                            <p className='w-10 h-10 rounded-full items-center text-[#50E13C] font-extrabold  flex justify-center bg-[#50E13C20]'><AiOutlineCheck size={30} /> </p>
                            <p className='text-[#000000]'>Assigned to rider.</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default OderCard;









