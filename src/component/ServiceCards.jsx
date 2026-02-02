import React, { useEffect, useState } from 'react';
import ServiceWork from './ServiceWork';

const ServiceCards = () => {
    const [works, setWork] = useState([]);
    useEffect(() => {
        fetch('work.json')
            .then(res => res.json())
            .then(data => setWork(data))
    }, [])
    // console.log(works)
    return (
        <div className=" lg:my-8 md:my-5 my-3">
            <h1 className='text-4xl text-[#03373D] font-extrabold lg:py-6 md:py-4 py-2 '>How it Works</h1>
            <div className='grid gap-3 md:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
            {
                works.map((work, index) => <ServiceWork work={work} key={index}></ServiceWork>)
            }
        </div>
        </div>
    );
};

export default ServiceCards;