import React, { useEffect, useState } from 'react';
import OurServiceCard from './OurServiceCard';

const OuerService = () => {
      const [services, setService] = useState([]);
        useEffect(() => {
            fetch('services.json')
                .then(res => res.json())
                .then(data => setService(data))
        }, [])
        // console.log(services)
    return (
        <div className='grid gap-3 md:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-2.5 '>
            {
                services.map((service ,index)=> <OurServiceCard service={service} key={index}></OurServiceCard>)
            }
        </div>
    );
};

export default OuerService;