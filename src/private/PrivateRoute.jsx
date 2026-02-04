import React from 'react';
import AuthInfo from '../authContext/farebagseAurh/AuthInfo';
import Loding from '../component/Loding';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loding } = AuthInfo();
    if (loding) {
        return <Loding></Loding>
    }
    if(!user){
        <Navigate to='/login'></Navigate>
    }
    return children
};

export default PrivateRoute;