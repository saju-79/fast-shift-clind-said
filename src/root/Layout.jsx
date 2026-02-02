import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';
import Navber from '../component/Navber';

const Layout = () => {
    return (

        <div className="bg-base-200">
            <div className="w-11/12  mx-auto py-4">
                <Navber></Navber>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>

    );
};

export default Layout;