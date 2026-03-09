import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { BsInfoLg } from 'react-icons/bs';
import Loding from '../../component/Loding';

const UsersManagement = () => {
    const axiosSecure = useAxiosSecure();
    const [searchText, setSearchText] = useState('')

    const { refetch, data: users = [], isLoading } = useQuery({
        queryKey: ['users', searchText],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?searchText=${searchText}`);
            return res.data;
        }
    })


    const handleMakeAdmin = user => {
        const roleInfo = { role: 'admin' }
        //TODO: must ask for confirmation before proceed
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.displayName} marked as an Admin`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }
    const confirmMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${user.displayName} will be promoted to Admin`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#16a34a",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, make Admin!",
        }).then((result) => {
            if (result.isConfirmed) {
                handleMakeAdmin(user);
            }
        });
    };

    const handleRemoveAdmin = user => {
        const roleInfo = { role: 'user' }
        //TODO: must ask for confirmation before proceed
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.displayName} removed from Admin`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }
    const confirmRemoveAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${user.displayName} will be removed from Admin`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, remove!",
        }).then((result) => {
            if (result.isConfirmed) {
                handleRemoveAdmin(user);
            }
        });
    };
    if (isLoading) return <Loding></Loding>
    return (
        <div className='ml-2'>
            <h2 className='text-2xl'>Manage Users: {users.length}</h2>
            <p>search text: {searchText}</p>
            <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="search"
                    className="grow"
                    placeholder="Search users" />

            </label>
            <div className="overflow-x-auto">
                <table className="table font-semibold items-center">
                    {/* head */}
                    <thead>
                        <tr className='font-bold text-[#000000]'>
                            <th>
                                #
                            </th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Joined Date</th>
                            <th> Action</th>
                            <th>Admin Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center gap-3 ">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.photoURL}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.displayName}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.createdAt
                                    ? new Date(user.createdAt).toLocaleString()
                                    : "N/A"}
                            </td>
                            <td className=" ">
                                {user.role === "admin" ? (
                                    <>
                                        <span className="badge badge-success">Admin</span>


                                    </>
                                ) : (
                                    <>
                                        <span >{user.role === "user" ?
                                            <><p className="badge badge-neutral ">user</p></>
                                            : <><p className="badge text-md font-semibold rounded-full bg-blue-100 text-blue-700"> Rider</p></>}</span>


                                    </>
                                )}
                            </td>
                            <td>
                                {user.role === 'admin' ?
                                    <button
                                        onClick={() => confirmRemoveAdmin(user)}
                                        className="btn btn-sm bg-red-500 hover:bg-red-600 text-white transition-all duration-200"
                                    >
                                        <FiShieldOff className="text-lg" />
                                    </button> :
                                    <button
                                        disabled={user.role === "admin"}
                                        onClick={() => confirmMakeAdmin(user)}
                                        title="Make Admin"
                                        className={`btn  btn-sm transition-all duration-200
                                               ${user.role !== "admin"
                                                ? "bg-green-500 hover:bg-green-600 text-white"
                                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                            }
                                               `}
                                    >
                                        <FaUserShield size={18} />
                                    </button>
                                }
                            </td>

                        </tr>)}



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManagement;