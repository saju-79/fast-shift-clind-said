import React from 'react';
import Forbidden from '../pages/Forbidden/Forbidden';
import Loding from '../component/Loding';
import AuthInfo from '../authContext/farebagseAurh/AuthInfo';
import useRole from '../pages/Forbidden/useRole';


const AdminRoute = ({ children }) => {
    const { loading } = AuthInfo();
    const { role, roleLoading } = useRole()
    if (loading || roleLoading) {
        return <Loding></Loding>
    }

    if (role !== 'admin') {
        return <Forbidden></Forbidden>
    }

    return children;
};

export default AdminRoute;