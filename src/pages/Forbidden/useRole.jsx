import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import AuthInfo from "../../authContext/farebagseAurh/AuthInfo";

const useRole = () => {
    const { user, loading } = AuthInfo();
    const axiosSecure = useAxiosSecure();

    const {
        data: role = "user",
        isLoading: roleLoading,
        isError,
        refetch
    } = useQuery({
        queryKey: ["user-role", user?.email],
        enabled: !loading && !!user?.email, // ✅ wait for auth
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}/role`);
            return res?.data?.role || "user";
        },
        staleTime:3 * 60 * 1000, // cache 5 min
    });

    return {
        role,
        roleLoading,
        isAdmin: role === "admin",
        isRider: role === "rider",
        isUser: role === "user",
        isError,
        refetch
    };
};

export default useRole;