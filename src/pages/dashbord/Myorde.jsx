import React from 'react';
import AuthInfo from '../../authContext/farebagseAurh/AuthInfo';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FiEdit } from 'react-icons/fi';
import { FaMagnifyingGlass, FaTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
// import ShareLogo from '../../shareLayouts/ShareLogo';

const Myorde = () => {
    const navigate = useNavigate();
    const { user } = AuthInfo();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user?.email],
        enabled: !!user?.email, // important fix
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
            return res.data;
        },

    });
    // console.log(parcels);
    const handlePayment = async (parcelId) => {
        navigate(`/dashboard/payment/${parcelId}`);
        console.log(parcelId)
        
    }
    // my parcel 
    /* const MyParcels = () => {
        const { user } = useAuth();
        const axiosSecure = useAxiosSecure();

        const { data: parcels = [], refetch } = useQuery({
            queryKey: ['my-parcels', user?.email],
            queryFn: async () => {
                const res = await axiosSecure.get(`/parcels?email=${user.email}`);
                return res.data;
            }
        })
    } */
    // hadle delte parcel
    const handleParcelDelete = id => {
        console.log(id);
        navigate('/dashboard/payment');
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#16a34a",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            // refresh the data in the ui
                            refetch();

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });
                        }

                    })


            }
        });

    }




    return (
        <div>
            {/* <p className='text-2xl hidden lg:block'> <ShareLogo></ShareLogo></p> */}
            <h2 className="text-sm text-[#03373D] font-extrabold my-4">All of my parcels : {parcels.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-lg text-[#03373D] font-extrabold my-4">
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment</th>
                            <th>Delivery Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-[#000000] font-extrabold my-4">
                        {
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index + 1}.</th>
                                <td>{parcel.parcelName}</td>
                                <td>${parcel.cost}</td>
                                <td>
                                    {
                                        parcel.paymentStatus === 'paid' ?
                                            <span className='bg-green-100 text-green-700 px-3 py-1 rounded '>Paid</span>
                                            :
                                            <button onClick={() => handlePayment(parcel._id)} className="btn btn-sm bg-[#16a34a] text-white">Pay</button>

                                    }
                                </td>
                                <td>{parcel.delivery_status}</td>
                                <td className='items-center justify-center'>
                                    <button className='btn btn-square hover:bg-primary'>
                                        <FaMagnifyingGlass />
                                    </button>
                                    <button className='btn btn-square hover:bg-[#CAEB66] mx-2'>
                                        <FiEdit></FiEdit>
                                    </button>
                                    <button
                                        onClick={() => handleParcelDelete(parcel._id)}
                                        className='btn btn-square hover:bg-red-600'>
                                        <FaTrashCan />
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Myorde;
