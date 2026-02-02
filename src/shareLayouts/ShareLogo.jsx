import React from 'react';
import logo from '/public/assets/logo.png'

const ShareLogo = (color) => {
    return (
        <div className='flex items-center'>
            <img className='w-5 md:w-7 lg:w-9' src={logo} alt="" />
            <h1 className={`lg:text-[32px] md:text-2xl text-xl  font-extrabold text-${color}`}>ZapShift</h1>
        </div>
    );
};

export default ShareLogo;