import React from 'react';
import Baner from '../../shareLayouts/Baner';
import ServiceCards from '../../component/ServiceCards';
import OuerService from '../../shareLayouts/OuerService';
import SellsCompani from './SellsCompani';
import Marquee from "react-fast-marquee"; // ✅ default import
import Support from './Support';
import Bemarchart from './beMarchant/Bemarchart';
import Costomer from './coustomer/Costomer';
import Question from './question/Question';


const Home = () => {
    return (
        <div className=' my-4 '>
            <Baner></Baner>
            {/* work */}
            <div className="lg:px-20 lg:py-4 md:py-2 py-1 md:px-10 px-5">
                <ServiceCards ></ServiceCards>
            </div>
            {/* Our Services */}
            <div className="bg-[#03373D] rounded-2xl py-20">
                <div className="text-center items-center space-y-2  ">
                    <h1 className='lg:text-5xl mg:text-3xl text-2xl font-extrabold text-[#ffffff]'>Our Services</h1>
                    <p className='text-[#DADADA] lg:text-xl mg:text-lg text-sm font-medium'> Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to  business shipments — we deliver on time, every time.</p>
                </div>
                <div className="lg:px-22 lg:py-6 md:py-3 py-1 md:px-12 px-7 ">
                    <OuerService></OuerService>
                </div>
            </div>
            <SellsCompani></SellsCompani>
            <Support></Support>
            <div className="py-3 md:py-6 lg:py-8">
                <Bemarchart></Bemarchart>
            </div>
            <Costomer></Costomer>
            <Question></Question>
        </div>
    );
};

export default Home;