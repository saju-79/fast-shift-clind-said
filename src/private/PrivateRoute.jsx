import React from 'react';
// import AuthInfo from '../authContext/farebagseAurh/AuthInfo';
import Loding from '../component/Loding';
import { Navigate, useLocation } from 'react-router';
import AuthInfo from '../authContext/farebagseAurh/AuthInfo';

const PrivateRoute = ({ children }) => {
    const location =  useLocation();
    const { user, loding } = AuthInfo();
    // console.log(user , "uaser from private router ")
    if (loding) {
        return <Loding></Loding>
    }
    if(!user){
       return <Navigate state={{from:location.pathname}} to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;