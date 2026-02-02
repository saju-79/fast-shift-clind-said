import React from 'react';

const Bemarchart = () => {
    return (
        <section
            data-aos="zoom-out-up"
            //   data-aos="flip-right"
            className=" bg-[#03373D] dark:text-gray-800 rounded-2xl bg-[url('https://i.ibb.co.com/Cp3qvzFv/be-a-merchant-bg.png')] bg-no-repeat object-cover">
            <div className="w-11/12 flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="lg:text-5xl md:text-2xl text-xl  font-extrabold text-[#ffffff] leading-none sm:text-6xl">
                        Merchant and Customer Satisfaction is Our First Priority
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-[#DADADA]">We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button rel="noopener noreferrer" className="px-4  py-4 text-lg font-semibold rounded dark:bg-[#CAEB66] dark:text-[#1F1F1F]">Become a Merchant</button>
                        <button rel="noopener noreferrer" className="px-4 py-4 text-lg font-semibold border text-[#CAEB66] rounded dark:border-[#CAEB66]">Earn with ZapShift Courier</button>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://i.ibb.co.com/nsxt57Tz/location-merchant.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Bemarchart;