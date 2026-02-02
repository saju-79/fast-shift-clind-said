import React from 'react';
import Navber from '../component/Navber';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

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