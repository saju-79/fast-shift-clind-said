import React from 'react';
import Testimonials from './Testimonials';

const Costomer = () => {
    return (
        <div>
            <div className=" flex flex-col justify-center items-center text-center lg:py-8 py-2 md:py-5">
                <img src="https://i.ibb.co.com/4nwQCnmT/customer-top.png" alt="" />
            </div>
            <div className="text-center items-center space-y-2  ">
                <h1 className='lg:text-5xl mg:text-3xl text-2xl font-extrabold text-[#03373D]'>What our customers are sayings</h1>
                <p className='text-[#606060] lg:text-xl mg:text-lg text-sm font-medium'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <div className="">
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Costomer;