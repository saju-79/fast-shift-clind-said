import axios from "axios";
import { useEffect } from "react";
import AuthInfo from "../authContext/farebagseAurh/AuthInfo";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
    baseURL: "https://fast-shift-server-said.vercel.app",
});

const useAxiosSecure = () => {
    const { user, handelSignOut } = AuthInfo();
    const navigate = useNavigate();

    useEffect(() => {
        // 🔐 Request Interceptor
        const requestInterceptor = axiosSecure.interceptors.request.use(
            (config) => {
                if (user?.accessToken) {
                    config.headers.Authorization = `Bearer ${user.accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // 🚨 Response Interceptor
        const responseInterceptor = axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                const status = error?.response?.status;

                if (status === 401 || status === 403) {
                    await handelSignOut();
                    navigate("/login");
                }

                return Promise.reject(error);
            }
        );

        // 🧹 Cleanup
        return () => {
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [user, handelSignOut, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;