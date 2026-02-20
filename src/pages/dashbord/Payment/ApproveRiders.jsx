import { useQuery, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { FaUserCheck } from 'react-icons/fa';
import { FaTrashCan } from 'react-icons/fa6';
import { AiFillEye } from 'react-icons/ai';
import Swal from 'sweetalert2';
import Loding from '../../../component/Loding';
import { BsFileEarmarkCheckFill } from "react-icons/bs";

const ApproveRiders = () => {

    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    const { data: riders = [], isLoading } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders?status=pending');
            return res.data;
        }
    });

    if (isLoading) return <Loding />;

    // ✅ Approve Function
    const handleApprove = async (rider) => {

        const confirm = await Swal.fire({
            title: "Approve this rider?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes"
        });

        if (!confirm.isConfirmed) return;

        const res = await axiosSecure.patch(`/riders/${rider._id}`, {
            status: "approved"
        });

        if (res.data.modifiedCount > 0) {

            // 🔥 refresh both pending & approved
            queryClient.invalidateQueries(['riders', 'pending']);
            queryClient.invalidateQueries(['riders', 'approved']);

            Swal.fire({
                icon: "success",
                title: "Rider Approved",
                timer: 1500,
                showConfirmButton: false
            });
        }
    };

    // ✅ Delete Function
    const handleDelete = async (rider) => {

        const confirm = await Swal.fire({
            title: "Delete this rider?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes"
        });

        if (!confirm.isConfirmed) return;

        const res = await axiosSecure.delete(`/riders/${rider._id}`);

        if (res.data.deletedCount > 0) {

            queryClient.invalidateQueries(['riders', 'pending']);

            Swal.fire({
                icon: "success",
                title: "Deleted",
                timer: 1500,
                showConfirmButton: false
            });
        }
    };

    // ✅ View Function
    const handleView = (rider) => {
        Swal.fire({
            title: rider.name,
            html: `
            <div style="text-align:left">
                <p><b>Email:</b> ${rider.email}</p>
                <p><b>District:</b> ${rider.district}</p>
                <p><b>Status:</b> ${rider.status}</p>
                <p><b>Phone:</b> ${rider.PhoneNumber || "N/A"}</p>
                <p><b>NID:</b> ${rider.NID || "N/A"}</p>
                <p><b>Bike Reg No:</b> ${rider.BikeRegistrationNumber || "N/A"}</p>
                <p><b>Bike Model:</b> ${rider.BikeBrandModel || "N/A"}</p>
                <p><b>License:</b> ${rider.DrivingLicenseNumber || "N/A"}</p>
            </div>
            `,
            icon: "info"
        });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#03373D]">
                Riders Pending Approval:
                <span className="text-emerald-600 ml-2">{riders.length}</span>
            </h2>

            <div className="overflow-x-auto mt-5">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>District</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {riders.map((rider, index) => (
                            <tr key={rider._id}>
                                <td>{index + 1}</td>
                                <td>{rider.name}</td>
                                <td>{rider.email}</td>
                                <td>{rider.district}</td>
                                <td >
                                    <span className="badge bg-red-300 text-white items-center text-center justify-center flex">
                                        {rider.status === "pending" ? "pending" : rider.status}
                                    </span>
                                </td>
                                <td className="flex gap-2">
                                    <button
                                        onClick={() => handleView(rider)}
                                        className="btn bg-blue-300">
                                        <AiFillEye />
                                    </button>

                                    <button
                                        onClick={() => handleApprove(rider)}
                                        className="btn bg-[#CAEB66]">
                                        <BsFileEarmarkCheckFill />
                                    </button>

                                    <button
                                        onClick={() => handleDelete(rider)}
                                        className="btn bg-red-400 text-white">
                                        <FaTrashCan />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveRiders;