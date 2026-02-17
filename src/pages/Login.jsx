import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContextApi } from '../authContext/farebagseAurh/AuthContex';
import Swal from 'sweetalert2';
import SocalGoogle from './socalMdia/SocalGoogle';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from || '/';
    // console.log(from)
    const { setUser, handelSignIn, user } = use(AuthContextApi)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const { email, password } = data;
        handelSignIn(email, password)
            .then(res => {

                setUser(res.user)
                navigate(from)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "successful Sign In",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .then(error => {
                console.log(error)
            })
        reset()

    }

    if (user) {
        return <Navigate to={from}></Navigate>
    }

    return (
        <div className='text-start space-y-2 items-center'>
            <h1 className="text-5xl font-extrabold dark:text-[#1f1f1f]">Welcome Back</h1>
            <p className="block mb-2 font-medium text-lg  dark:text-[#000000]">Login with ZapShift</p>
            {/* <p className="my-8">
                <span className="font-medium dark:text-gray-900">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
            </p> */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="self-stretch mt-2 space-y-5">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Email</label>
                    <input
                        type="email"
                        required
                        {...register("email", { require: true })}
                        placeholder="Username"
                        className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                    {errors.email?.type === "required" && <p className='text-red-700'>Email field is required</p>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-[#1f1f1f] font-bold text-lg">Password</label>
                    <input
                        type="password"
                        required {...register("password", { required: true, minLength: 6, pattern: { value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/ } })}
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                    {errors.password?.type === "required" && <p className='text-red-700'>Password field is required</p>}
                    {errors.password?.type === "minLength" && <p className='text-red-700'>Minimum password length is 6 characters</p>}
                    {errors.password?.type === "pattern" && <p className='text-red-700'> Must include uppercase, lowercase and number.</p>}
                    <div className="flex justify-end  text-sm mt-1 dark:text-gray-600">
                        <Link to='/forgate'>
                            <u rel="noopener noreferrer text-[#E9ECF1]" >Forgot Password?</u>
                        </Link>
                    </div>
                </div>
                <button type="submit" className="w-full font-extrabold py-3  rounded dark:bg-[#CAEB66] dark:text-[#1f1f1f]">Login</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>
            <div className="  space-y-4">
                <SocalGoogle text={`Login`}></SocalGoogle>
            </div>
            <p className=" text-center  text-lg sm:px-6 dark:text-[#71717A]">Don't have an account?
                <Link to='/register' rel="noopener noreferrer" href="#" className="underline dark:text-[#8FA748]">Register</Link>
            </p>
        </div>
    );
};

export default Login;