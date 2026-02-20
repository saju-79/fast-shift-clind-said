import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import AuthInfo from '../../authContext/farebagseAurh/AuthInfo';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const SocalGoogle = ({ text }) => {
    const axiosSecure = useAxiosSecure();
    const locatoion = useLocation();
    const navigate = useNavigate();
    const from = locatoion?.state?.from || '/';
    // console.log(from ,'from google')

    const { setUser, handelSignwithGoogle } = AuthInfo()
    const handelGoogle = () => {
        handelSignwithGoogle()
            .then(  async (res) => {
                setUser(res.user)
                navigate(from)
                console.log(res.user, "google user");
                const userInfo = {
                    email: res.user.email,
                    displayName: res.user.displayName,
                    photoURL: res.user.photoURL
                }
                const rest = await axiosSecure.post('/users', userInfo)
                console.log(rest.data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "successful Google  Sign In",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
    // navigate(from)
    return (
        <button onClick={handelGoogle} aria-label="Login with Google" type="button" className="flex font-extrabold py-3 border-none   dark:bg-[#E9ECF1] dark:text-[#1f1f1f] items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 focus:hidden  ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                <FcGoogle size={30} />
                {/* <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path> */}
            </svg>
            <p>{text} with Google</p>
        </button>
    );
};

export default SocalGoogle;