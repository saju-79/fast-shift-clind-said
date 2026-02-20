import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUserCheck } from 'react-icons/fa';
// import { IoPersonRemoveSharp } from 'react-icons/io5';
import { FaTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { AiFillEye } from 'react-icons/ai';
import Loding from '../../../component/Loding';

const ApproveRiders = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: riders = [], isLoading } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders?status=pending');
            return res.data;
        }
    })
    if (isLoading) return <Loding></Loding>

    const updateRiderStatus = async (rider, status) => {

        const result = await Swal.fire({
            title: `Are you sure?`,
            text: `You want to ${status} this rider`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes",
        });

        if (!result.isConfirmed) return;

        const res = await axiosSecure.patch(`/riders/${rider._id}`, {
            status: status,
            email: rider.email
        });

        if (res.data.modifiedCount > 0) {
            await refetch();   // 🔥 refresh instantly

            Swal.fire({
                icon: "success",
                title: `Rider ${status} successfully`,
                timer: 1500,
                showConfirmButton: false
            });
        }
    };
    const handleDelete = (rider) => {
        updateRiderStatus(rider, 'rejected');
        Swal.fire({
            title: "Are you sure?",
            text: "This rider will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/riders/${rider._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                icon: "success",
                                title: "Deleted!",
                                text: "Rider has been deleted.",
                                timer: 2000,
                                showConfirmButton: false
                            });
                        }
                    })

            }
        });
    };

    const handleView = (rider) => {
        updateRiderStatus(rider, 'approved');
        console.log(rider);
        Swal.fire({
            title: rider.name,
            html: `
            <div class="text-start">
            <p><strong>Email:</strong> ${rider.email}</p>
            <p><strong>District:</strong> ${rider.district}</p>
            <p><strong>Status:</strong> ${rider.status}</p>
            <p><strong>Phone:</strong> ${rider.PhoneNumber || "null"}</p>
            <p><strong>NID:</strong> ${rider.NID || "null"}</p>
            <p><strong>Bike Registration Number:</strong> ${rider.BikeRegistrationNumber || "null"}</p>
            <p><strong>Bike Brand Model:</strong> ${rider.BikeBrandModel || "null"}</p>
            <p><strong>Driving License Number:</strong> ${rider.DrivingLicenseNumber || "null"}</p>
            </div>
            
        `,
            icon: "info",
            confirmButtonText: "Close"
        });


    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#03373D]">Riders Pending Approval: <span className="text-emerald-600">{riders.length} </span></h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-[#000000] font-bold'>Name</th>
                            <th className='text-[#000000] font-bold'>Email</th>
                            <th className='text-[#000000] font-bold'>District</th>
                            <th className='text-[#000000] font-bold'>status</th>
                            <th className='text-[#000000] font-bold'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riders.map((rider, index) => <tr>
                                <th className='text-[#000000] font-medium'>{index + 1}</th>
                                <td className='text-[#000000] font-medium'>{rider.name}</td>
                                <td className='text-[#000000] font-medium'>{rider.email}</td>
                                <td className='text-[#000000] font-medium'>{rider.district}</td>
                                <td className='text-[#000000] font-medium'>
                                    <p className={`${rider.status === 'approved' ? 'text-green-800' : 'text-red-500'}`}>{rider.status}</p>
                                </td>
                                <td className='text-[#000000] font-medium'>
                                    <button
                                        onClick={() => handleView(rider)}

                                        className='btn bg-blue-300'>
                                        <AiFillEye />
                                    </button>
                                    <button
                                        disabled={rider.status === "approved"}
                                        onClick={() => updateRiderStatus(rider, 'approved')}
                                        className={`btn ${rider.status === "approved"
                                            ? "bg-gray-300 cursor-not-allowed"
                                            : "bg-[#CAEB66]"}`}>
                                        <FaUserCheck />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(rider)}
                                        className='btn bg-red-300 hover:bg-red-700  text-white'>
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

export default ApproveRiders;