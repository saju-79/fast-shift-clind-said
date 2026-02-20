import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import AuthInfo from '../../authContext/farebagseAurh/AuthInfo';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Raider = () => {
    const { register, handleSubmit, control, reset } = useForm();
    const { user } = AuthInfo();
    const axiosSecure = useAxiosSecure();
    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(s => s.region);
    const regions = [...new Set(regionsDuplicate)]
    // console.log(regions)
    // console.log(user, "raider user")
    const onRaiderSubmit = data => {
        axiosSecure.post('/riders', data)
            .then(res => {
                if (res?.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted. We will reach to you in 145 days",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
        reset();
    }
    const districtsByRegion = (region) => {
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }
    const riderRegion = useWatch({ control, name: 'region' });
    return (
        <section className="p-6 dark:bg-[#FFFFFF] shadow  my-4 rounded-lg dark:text-gray-800">
            <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                    <div className='text-start space-y-2 items-center'>
                        <h1 className="text-5xl font-extrabold dark:text-[#1f1f1f]">Be a Rider</h1>
                        <p className="block mb-2 font-medium text-lg  dark:text-[#606060]">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                        {/* <p className="my-8">
                <span className="font-medium dark:text-gray-900">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
            </p> */}
                        <form onSubmit={handleSubmit(onRaiderSubmit)} noValidate="" action="" className="self-stretch mt-2 space-y-5">
                            <h1 className="text-4xl font-extrabold dark:text-[#1f1f1f] mt-3">Tell us about yourself</h1>
                            {/* Your Name */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Your Name</label>
                                <input
                                    type="text"
                                    {...register("name")}
                                    defaultValue={user?.displayName}
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                            </div>
                            {/* Your Email  */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Your Email</label>
                                <input
                                    {...register("email")}
                                    defaultValue={user?.email}
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                            </div>
                            {/* rider region */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Regions</legend>
                                <select
                                    {...register('region')}
                                    defaultValue="Pick a region"
                                    className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" >
                                    <option disabled={true}>Pick a region</option>
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>
                            </fieldset>
                            {/*Your District  */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Your District</label>
                                <select
                                    {...register('district')}
                                    defaultValue="Pick a district"
                                    className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" >
                                    <option disabled={true}>Pick a district</option>
                                    {
                                        districtsByRegion(riderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>
                            </div>
                            {/* Driving License Number  */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Driving License Number</label>
                                <input
                                    type="number"
                                    {...register("DrivingLicenseNumber")}
                                    placeholder="Driving License Number"
                                    className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                            </div>
                            {/* NID No  */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">NID No</label>
                                <input
                                    type="number"
                                    {...register("NID")}
                                    placeholder="NID"
                                    className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                            </div>
                            {/* Phone Number */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Phone Number</label>
                                <input
                                    type="number"
                                    {...register("PhoneNumber")}
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                            </div>
                            {/* Bike Brand Model and Year */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Bike Brand Model and Year</label>
                                <input
                                    type="text"
                                    {...register("BikeBrandModel")}
                                    placeholder="Bike Brand Model and Year"
                                    className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                            </div>
                            {/* Bike Registration Number  */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Bike Registration Number</label>
                                <input
                                    type="text"
                                    {...register("BikeRegistrationNumber")}
                                    placeholder="Bike Registration Number"
                                    className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                            </div>
                            {/* Tell Us About Yourself */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Tell Us About Yourself</label>
                                <textarea
                                    {...register("TellUsAboutYourself")}
                                    placeholder="Tell Us About Yourself"
                                    className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                            </div>

                            <button type="submit" className="w-full font-extrabold py-4  rounded dark:bg-[#CAEB66] dark:text-[#1f1f1f]">Submit</button>
                        </form>



                    </div>
                </div>
                <img src="https://i.ibb.co.com/0jg35XVs/agent-pending.png" alt="" className="object-cover object-contain  h-full w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
            </div>
        </section>
    );
};

export default Raider;