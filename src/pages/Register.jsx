import React, { use, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import userImsg from "/assets/image-upload-icon.png"
import { useForm } from 'react-hook-form';
import { AuthContextApi } from '../authContext/farebagseAurh/AuthContex';
import Swal from 'sweetalert2';
import SocalGoogle from './socalMdia/SocalGoogle';
import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';

const Register = () => {
    const location =  useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from ||"/"
    // console.log(from)
    const axiosSecure = useAxiosSecure();
    const [profileImage, setProfileImage] = useState('');
    const { setUser, handelSignUp, user, updateUserProfile } = use(AuthContextApi)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onsubmit = data => {
        const { email, password } = data
        handelSignUp(email, password)
            .then(async (res) => {
                setUser(res.user)
                // update user profile  in the database
                // create user in the database
                const userInfo = {
                    email: data.email,
                    displayName: data.name,
                    photoURL: profileImage
                }
                const rest = await axiosSecure.post('/users', userInfo)
                console.log(rest.data)



                // update user profile  in the firebase
                updateUserProfile({ displayName: data.name, photoURL: profileImage })
                    .then(() => {
                        // Profile updated!
                        // ...
                        console.log("profile upadate ")
                        navigate(from);
                    }).catch((error) => {
                        // An error occurred
                        console.log(error)
                    })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "successful Sign Up ",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error)
            })

        reset()
    }
    const handelFileChange = async (e) => {
        const image = e.target.files[0];
        // 1. store the image in form data
        const formData = new FormData();
        formData.append('image', image);

        // 2. send the photo to store and get the ul
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_key}`;
        const res = await axios.post(image_API_URL, formData);
        setProfileImage(res.data.data.url)


    }
    if (user) {
        return <Navigate to={from}></Navigate>
    }
    // console.log(profileImage)
    return (
        <div className='text-start space-y-2 items-center'>
            <h1 className="text-5xl font-extrabold dark:text-[#1f1f1f]">Create an Account</h1>
            <p className="block mb-2 font-medium text-lg  dark:text-[#000000]">Register with ZapShift</p>
            {/* <p className="my-8">
                <span className="font-medium dark:text-gray-900">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
            </p> */}
            <form onSubmit={handleSubmit(onsubmit)} noValidate="" action="" className="self-stretch mt-2 space-y-5">
                <div className="space-y-1 text-sm">
                    <img src={userImsg} alt="" />
                    <input type="file"
                        name="file"
                        onChange={handelFileChange}
                        placeholder='your profile piecture'
                        className="font-bold text-lg text-[#94a3bb] " />
                    {/*  <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Name</label>
                    <input type="text" name="username" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" /> */}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block
                     font-bold dark:text-[#1f1f1f] text-lg">Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: true })}
                        className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                    {errors.name?.type === "required" && <p className='text-red-700'> Name field is required</p>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Email</label>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="email"
                        className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                    {errors.email?.type === "required" && <p className='text-red-700'>Name field is required</p>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-[#1f1f1f] font-bold text-lg">Password</label>
                    <input
                        type="password"
                        {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: { value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/ } })}
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                    {errors.password?.type === "required" && <p className='text-red-700'>Password field is required</p>}
                    {errors.password?.type === "minLength" && <p className='text-red-700'>Minimum password length is 6 characters</p>}
                    {errors.password?.type === "maxLength" && <p className='text-red-700'>Password must be no more than 20 digits.</p>}
                    {errors.password?.type === "pattern" && <p className='text-red-700'> Must include uppercase, lowercase and number.</p>}
                    <div className="flex justify-end  text-sm mt-1 dark:text-gray-600">
                        {/* <u rel="noopener noreferrer text-[#E9ECF1]" >Forgot Password?</u> */}
                    </div>
                </div>
                <button type="submit" className="w-full font-extrabold py-3  rounded dark:bg-[#CAEB66] dark:text-[#1f1f1f]">Register</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                <p className="px-3 text-sm dark:text-gray-600">Register with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>
            <div className="  space-y-4">
                <SocalGoogle text={'Register'}></SocalGoogle>
            </div>
            <p className=" text-center  text-lg sm:px-6 dark:text-[#71717A]">Already have an account?
                <Link to='/login' rel="noopener noreferrer" href="#" className="underline dark:text-[#8FA748]">Login</Link>
            </p>
        </div>
    );
};

export default Register;