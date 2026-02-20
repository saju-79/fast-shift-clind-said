import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaEye, FaUserCheck } from 'react-icons/fa';
import { IoPersonRemoveSharp } from 'react-icons/io5';
import { FaTrashCan } from 'react-icons/fa6';
import { useQuery } from '@tanstack/react-query';

const ApproveRiders = () => {
    const axiosSecure = useAxiosSecure();
     const { refetch, data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders');
            return res.data;
        }
    })
    console.log(riders._id)
    const updateRiderStatus = (rider, status) => {
        const updateInfo = { status: status, email: rider.email }
        axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Rider status is set to ${status}.`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

    const handleApproval = rider => {
        updateRiderStatus(rider, 'approved');
    }

    const handleRejection = rider => {
        updateRiderStatus(rider, 'rejected')
    }

    return (
        <div>
            <h2 className="text-2xl text-[#03373D]">Riders Pending Approval: {riders.length} </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra text-[#03373D] ">
                    {/* head */}
                    <thead>
                        <tr className='text-[#03373D] font-bold'>
                            <th className='text-[#000000] font-bold'></th>
                            <th className='text-[#000000] font-bold'>Name</th>
                            <th className='text-[#000000] font-bold'>Email</th>
                            <th className='text-[#000000] font-bold'>District</th>
                            <th className='text-[#000000] font-bold'>Application Status</th>
                            <th className='text-[#000000] font-bold'>Work Status</th>
                            <th className='text-[#000000] font-bold'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riders.map((rider, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{rider.name}</td>
                                <td>{rider.email}</td>
                                <td>{rider.district}</td>
                                <td>
                                    <p className={`${rider.status === 'approved' ? 'text-green-800' : 'text-red-500'}`}>{rider.status}</p>
                                </td>
                                <td>{rider.workStatus}</td>
                                <td>
                                    <button
                                        className='btn bg-red-500'>
                                        {<FaEye></FaEye>}
                                    </button>
                                    <button
                                        onClick={() => handleApproval(rider)} className='btn'>
                                        <FaUserCheck />
                                    </button>
                                    <button
                                        onClick={() => handleRejection(rider)}
                                        className='btn bg-red-400'>
                                        <IoPersonRemoveSharp />
                                    </button>
                                    <button className='btn bg-red-600'>
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