import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import userImsg from "/assets/image-upload-icon.png"

const Register = () => {
    return (
        <div className='text-start space-y-2 items-center'>
            <h1 className="text-5xl font-extrabold dark:text-[#1f1f1f]">Create an Account</h1>
            <p className="block mb-2 font-medium text-lg  dark:text-[#000000]">Register with ZapShift</p>
            {/* <p className="my-8">
                <span className="font-medium dark:text-gray-900">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
            </p> */}
            <form noValidate="" action="" className="self-stretch mt-2 space-y-5">
                <div className="space-y-1 text-sm">
                    <img src={userImsg} alt="" />
                    <input type="file" name="file" placeholder=''  className="font-bold text-lg text-[#94a3bb] " />
                   {/*  <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Name</label>
                    <input type="text" name="username" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" /> */}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Name</label>
                    <input type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Email</label>
                    <input type="email" name="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-[#1f1f1f] font-bold text-lg">Password</label>
                    <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                    <div className="flex justify-end  text-sm mt-1 dark:text-gray-600">
                        {/* <u rel="noopener noreferrer text-[#E9ECF1]" >Forgot Password?</u> */}
                    </div>
                </div>
                <button type="submit" className="w-full font-extrabold py-3  rounded dark:bg-[#CAEB66] dark:text-[#1f1f1f]">Register</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                <p className="px-3 text-sm dark:text-gray-600">Register with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>
            <div className="  space-y-4">
                <Link to='/'>
                    <button aria-label="Login with Google" type="button" className="flex font-extrabold py-3 border-none   dark:bg-[#E9ECF1] dark:text-[#1f1f1f] items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 focus:hidden  ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <FcGoogle size={30} />
                            {/* <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path> */}
                        </svg>
                        <p>Register with google</p>
                    </button>
                </Link>
            </div>
            <p className=" text-center  text-lg sm:px-6 dark:text-[#71717A]">Already have an account? 
                <Link to='/login' rel="noopener noreferrer" href="#" className="underline dark:text-[#8FA748]">Login</Link>
            </p>
        </div>
    );
};

export default Register;