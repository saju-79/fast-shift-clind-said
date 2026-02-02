import React from 'react';
import ShareLogo from '../shareLayouts/ShareLogo';
import { Link, Outlet } from 'react-router';
import Login from '../pages/Login';

const AuthLayouts = () => {
    return (

        <section className="px-6 dark:bg-gray-100 dark:text-gray-800   ">
            <div className="lg:px-8 lg:py-5 md:px-4 md:py-3 px-2 py-1"> <Link to='/'><ShareLogo></ShareLogo></Link></div>
            <div className=" w-11/12 grid gap-6 mx-auto  lg:grid-cols-2 xl:grid-cols-5 h-screen">
                {/* text */}
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 items-center dark:bg-gray-50 h-full flex-1">
                    <Outlet></Outlet>
                </div>

                <img src="https://i.ibb.co.com/JWr7BQjk/auth-Image.png" alt="" className="object-cover w-full h-screen rounded-md xl:col-span-3 dark:bg-[#8FA74820]" />

            </div>
        </section>


    );
};

export default AuthLayouts;