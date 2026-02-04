import React, { use } from 'react';
import { AuthContextApi } from './AuthContex';

const AuthInfo = () => {
     const authInfo = use(AuthContextApi)
     return authInfo
};

export default AuthInfo;