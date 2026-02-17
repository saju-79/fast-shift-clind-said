import { createBrowserRouter } from "react-router";
import Layout from "../root/Layout";
import Home from "../pages/home/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayouts from "../root/AuthLayouts";
import ForgatePassword from "../pages/authallSection/ForgatePassword";
import Raider from "../pages/raider/Raider";
import Calculate from "../pages/Calculate";
import TacOder from "../pages/TacOder.jsx/TacOder";
import Parcel from "../pages/parcel/Parcel";
import Covarage from "../pages/covarage/Covarage";
import Error from "../component/Error";
import PrivateRoute from "../private/PrivateRoute";
import DashboardLayout from "../root/DashboardLayout";
import Myorde from "../pages/dashbord/Myorde";
import Payment from "../pages/dashbord/Payment/Payment";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <PrivateRoute><AboutUs /></PrivateRoute>
            },
            {
                path: "/raider",
                element: <PrivateRoute><Raider /></PrivateRoute>
            },
            {
                path: "/calculate",
                element: <PrivateRoute><Calculate /></PrivateRoute>
            },
            {
                path: '/oders',
                element: <PrivateRoute><TacOder /></PrivateRoute>
            },
            {
                path: '/parcel',
                element: <PrivateRoute><Parcel /></PrivateRoute>,
                loader: () => fetch('distric.json')

            },
            {
                path: '/covarage',
                element: <PrivateRoute><Covarage /></PrivateRoute>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                index: true,
                path: "/dashboard/my-parcels",
                element: <Myorde></Myorde>
            },
            {
                path: '/dashboard/payment/:id',
                Component: Payment,
            }
        ]
    },
    {
        path: "/",
        Component: AuthLayouts,
        children: [
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register,
            },
            {
                path: '/forgate',
                Component: ForgatePassword
            },
            {
                path: "/error",
                Component: Error,
            }
        ]
    },


])