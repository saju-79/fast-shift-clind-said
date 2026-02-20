import { useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaUserCheck } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PendingRiders = () => {

    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    const { data: riders = [], isLoading } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders?status=pending');
            return res.data;
        }
    });

    const updateRiderStatus = async (rider) => {

        const confirm = await Swal.fire({
            title: "Approve Rider?",
            icon: "question",
            showCancelButton: true,
        });

        if (!confirm.isConfirmed) return;

        const res = await axiosSecure.patch(`/riders/${rider._id}`, {
            status: "approved"
        });

        if (res.data.modifiedCount > 0) {

            // 🔥 Refresh both queries
            queryClient.invalidateQueries(['riders', 'pending']);
            queryClient.invalidateQueries(['riders', 'approved']);

            Swal.fire("Approved!", "", "success");
        }
    };

    if (isLoading) return <p className="text-center">Loading...</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Pending Riders <span className="text-lg text-green-500 font-bold">({riders.length})</span></h2>

            <div className="overflow-x-auto bg-white shadow rounded-xl">
                <table className="table w-full">
                    <thead className="bg-gray-100">
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
                        {riders.map(rider => (
                            <tr key={rider._id} className="hover">
                                <td></td>
                                <td>{rider.name}</td>
                                <td>{rider.email}</td>
                                <td>{rider.district}</td>
                                <td >
                                    <span className="badge bg-red-300 text-white items-center text-center justify-center flex">
                                        {rider.status === "pending" ? "pending" : rider.status}
                                    </span>
                                </td>

                                <td>
                                    <button
                                        onClick={() => updateRiderStatus(rider)}
                                        className="btn bg-[#CAEB66] hover:bg-lime-400 text-black"
                                    >
                                        <FaUserCheck />
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

export default PendingRiders;