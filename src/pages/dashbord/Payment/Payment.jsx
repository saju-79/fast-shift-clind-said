import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loding from '../../../component/Loding';
// import AuthInfo from '../../../authContext/farebagseAurh/AuthInfo';

const Payment = () => {
    // const {user} = AuthInfo();
    const { parcelId } = useParams();
    const axiosSecure = useAxiosSecure();
    // const stripe = require("stripe");


    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        }
    })

    const handlePayment = async () => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName,
        }

        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);

        console.log(res.data);

        window.location.href = res.data.url;
    }

    if (isLoading) {
        return <Loding></Loding>
    }

    return (
        <div className=" flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center my-4">Please Pay ${parcel.cost} for : {parcel.parcelName} </h2>
                <button onClick={handlePayment} className='btn bg-[#CAEB66] text-black font-bold w-full'>Pay</button>
            </div>
        </div>
    );
};

export default Payment;