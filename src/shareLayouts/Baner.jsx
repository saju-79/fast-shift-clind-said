import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import banerLogo1 from '/public/assets/banner/banner1'
// import banerLogo2 from '/public/assets/logo.png'
// import banerLogo3 from '/public/assets/logo.png'

const Baner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
            <div>
                <img src='https://i.ibb.co.com/KjRqGqrf/banner1.png' />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src='https://i.ibb.co.com/N6w5H8Qb/banner2.png' />
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src='https://i.ibb.co.com/xprtJTy/banner3.png' />
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
    );
};

export default Baner;