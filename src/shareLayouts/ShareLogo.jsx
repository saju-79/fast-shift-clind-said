import React from 'react';
import logo from '/public/assets/logo.png'
import { Link } from 'react-router';

const ShareLogo = (color) => {
    return (
        <Link to='/'>
            <div className='flex items-center'>
                <img className='w-5 md:w-7 lg:w-9' src={logo} alt="" />
                <h1 className={`lg:text-[32px] md:text-2xl text-xl  font-extrabold text-${color}`}>ZapShift</h1>
            </div>
        </Link>
    );
};

export default ShareLogo;