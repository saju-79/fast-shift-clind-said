import React from 'react';
import { Link } from 'react-router';

const ForgatePassword = () => {
    return (
        <div className='text-start space-y-2 items-center'>
            <h1 className="text-5xl font-extrabold dark:text-[#1f1f1f]">Forgot Password</h1>
            <p className="block mb-2 font-medium text-lg  dark:text-[#000000]">Enter your email address and we’ll send you a reset link.</p>
            {/* <p className="my-8">
                <span className="font-medium dark:text-gray-900">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
            </p> */}
            <form noValidate="" action="" className="self-stretch mt-2 space-y-5">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Email</label>
                    <input type="text" name="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                </div>
             {/*    <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-[#1f1f1f] font-bold text-lg">Password</label>
                    <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                    <div className="flex justify-end  text-sm mt-1 dark:text-gray-600">
                        <Link to='/forgate'>
                            <u rel="noopener noreferrer text-[#E9ECF1]" >Forgot Password?</u>
                        </Link>
                    </div>
                </div> */}
                <button type="submit" className="w-full font-extrabold py-3  rounded dark:bg-[#CAEB66] dark:text-[#1f1f1f]">Send</button>
            </form>
           {/*  <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div> */}
            {/* <div className="  space-y-4">
                <Link to='/'>
                    <button aria-label="Login with Google" type="button" className="flex font-extrabold py-3 border-none   dark:bg-[#E9ECF1] dark:text-[#1f1f1f] items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 focus:hidden  ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <FcGoogle size={30} />

                        </svg>
                        <p>Login with Google</p>
                    </button>
                </Link>
            </div> */}
            <p className=" text-start  text-lg mt-2 dark:text-[#71717A]">Remember your password? 
                <Link to='/login' rel="noopener noreferrer" href="#" className="underline dark:text-[#8FA748]">Login</Link>
            </p>
        </div>
    );
};

export default ForgatePassword;