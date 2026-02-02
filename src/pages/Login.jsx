import React from 'react';

const Login = () => {
    return (
        <div className='text-start space-y-1'>
            <h1 className="text-5xl font-extrabold dark:text-[#1f1f1f]">Welcome Back</h1>
            <p className="block mb-2 font-medium text-lg  dark:text-[#000000]">Login with ZapShift</p>
            {/* <p className="my-8">
                <span className="font-medium dark:text-gray-900">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
            </p> */}
            <form noValidate="" action="" className="self-stretch space-y-3">
                 
                <button type="submit" className="w-full font-extrabold py-3  rounded dark:bg-[#CAEB66] dark:text-[#1f1f1f]">Login</button>
            </form>
        </div>
    );
};

export default Login;