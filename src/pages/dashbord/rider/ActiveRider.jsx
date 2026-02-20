import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loding from "../../../component/Loding";
import Swal from "sweetalert2";
import { FaTrashCan } from "react-icons/fa6";


const ActiveRiders = () => {

    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    const { data: riders = [], isLoading } = useQuery({
        queryKey: ['riders', 'approved'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders?status=approved');
            return res.data;
        }
    });

    if (isLoading) return <Loding></Loding>;
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

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Active Riders <span className="text-lg text-green-500 font-bold">({riders.length})</span></h2>

            <div className="overflow-x-auto bg-white shadow rounded-xl">
                <table className="table w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>district</th>
                            <th>Status</th>
                            <td>action</td>

                        </tr>
                    </thead>

                    <tbody>
                        {riders.map(rider => (
                            <tr key={rider._id}>
                                <td>{rider.name}</td>
                                <td>{rider.email}</td>
                                <td>{rider.district}</td>
                                <td>
                                    <span className="badge bg-green-500 text-white">
                                        Approved
                                    </span>

                                    {/*  <button
                                        className="badge bg-red-300 text-white items-center text-center justify-center flex ml-2">
                                        {rider.status === "pending" ? "pending" : rider.status}
                                    </button> */}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(rider)}
                                        className="badge bg-red-300 hover:bg-red-700 text-white items-center text-center justify-center flex ml-2">
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

export default ActiveRiders;