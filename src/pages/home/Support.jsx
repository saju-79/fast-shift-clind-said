import React, { useEffect, useState } from 'react';
import FeatureSection from './FeatureSection';

 

const Support = () => {
          const [data, setSupport] = useState([]);
            useEffect(() => {
                fetch('support.json')
                    .then(res => res.json())
                    .then(data => setSupport(data))
            }, [])
            // console.log(Support)
    return (
        <div data-aos="fade-up-right" className='  py-4 md:py-6 lg:py-10 border-y-2 border-[#606060] border-dashed'>
           <FeatureSection data={data}></FeatureSection>
        </div>
    );
};

export default Support;