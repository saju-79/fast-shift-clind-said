import React from 'react';
import useRole from '../pages/Forbidden/useRole';
import AuthInfo from '../authContext/farebagseAurh/AuthInfo';
import Loding from '../component/Loding';
import Forbidden from '../pages/Forbidden/Forbidden';

const RiderRoute = ({ children }) => {
    const { loading, user } = AuthInfo();
    const { role, roleLoading } = useRole()

    if (loading || !user || roleLoading) {
        return <Loding></Loding>
    }

    if (role !== 'rider') {
        return <Forbidden></Forbidden>
    }

    return children;
};

export default RiderRoute;