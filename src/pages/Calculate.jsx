import React from 'react';
import { Link } from 'react-router';

const Calculate = () => {
    return (
        <div className=" mt-4 mb-8 bg-[#ffffff] shadow-sm rounded-xl">
            <div className=" lg:px-20 lg:py-15 md:px-15 mg:py-10 px-8 py-4  flex flex-col  md:flex-row lg:flex-row gsp-5">
                {/* input */}
                <div className='text-start space-y-4 items-center flex-1 '>
                    <h1 className="text-5xl font-extrabold dark:text-[#03373D]">Pricing Calculator</h1>
                    <p className="block mb-2 font-medium text-lg  dark:text-[#717171]">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                    {/* <p className="my-8">
                <span className="font-medium dark:text-gray-900">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
            </p> */}
                    <form noValidate="" action="" className="self-stretch mt-2 space-y-5">
                        <h1 className="text-3xl items-center my-5 text-center font-extrabold dark:text-[#03373D]">Calculate Your Cost</h1>
                        {/* Parcel type */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Parcel type</label>
                            <input type="text" name="Parceltype" placeholder="Parcel type" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                        </div>
                        {/* Delivery Destination */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Delivery Destination</label>
                            <input type="text" name="DeliveryDestination" placeholder="Delivery Destination" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                        </div>
                        {/*Weight (KG) */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Weight (KG)</label>
                            <input type="text" name="Weight " placeholder="Weight (KG)" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                        </div>
                        {/* button */}
                        <div className="w-full flex gap-2">
                            <button type="submit" className="font-extrabold py-3 w-1/4  bg-[#caeb6610] rounded dark:text-[#73863A] border-2 dark:border-[#caeb66]">Reset</button>
                            <button type="submit" className=" font-extrabold py-3 w-3/4 rounded dark:bg-[#CAEB66] dark:text-[#1f1f1f]">Calculate</button>
                        </div>
                    </form>

                </div>
                {/* text section */}
                <div className="flex-1 p-6 flex justify-center items-center text-center  ">
                   <span className='text-9xl font-extrabold text-[#1f1f1f]'> 50k</span>
                </div>
            </div>
        </div>
    );
};

export default Calculate;