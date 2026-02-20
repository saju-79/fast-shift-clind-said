import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loding from "../../../component/Loding";

const ActiveRider = () => {
    const axiosSecure = useAxiosSecure();

    const { data: riders = [], isLoading } = useQuery({
        queryKey: ['riders', 'approved'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders?status=approved');
            return res.data;
        }
    });

    if (isLoading) return <Loding></Loding>

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#03373D]">
                Active Riders:
                <span className="text-green-600 ml-2">{riders.length}</span>
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
                        </tr>
                    </thead>
                    <tbody>
                        {riders.map((rider, index) => (
                            <tr key={rider._id}>
                                <td>{index + 1}</td>
                                <td>{rider.name}</td>
                                <td>{rider.email}</td>
                                <td>{rider.district}</td>
                                <td className="text-green-600 font-semibold">
                                    {rider.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ActiveRider;