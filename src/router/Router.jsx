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
import AssignedDeliveries from "../pages/dashbord/rider/AssignedDeliveries";
import CompletedDeliveries from "../pages/dashbord/rider/CompletedDeliveries";
import ApproveRiders from "../pages/dashbord/Payment/ApproveRiders";
import AssignRiders from "../pages/dashbord/rider/AssignRiders";
import ActiveRider from "../pages/dashbord/rider/ActiveRider";
import PendingRiders from "../pages/dashbord/rider/PendingRiders";



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
                element: <PrivateRoute><Raider /></PrivateRoute>,
                loader: () => fetch('distric.json')
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
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: 'my-parcels',
                Component: Myorde
            },
            {
                path: 'payment/:parcelId',
                Component: Payment
            },
            /*  {
               path: 'payment-history',
               Component: PaymentHistory
             }, */
            /*  {
               path: 'payment-success',
               Component: PaymentSuccess
             },  */
            /*  {
               path: 'payment-cancelled', 
               Component: PaymentCancelled
             },  */
            // rider only routes
            {
                path: 'assigned-deliveries',
                element: <AssignedDeliveries></AssignedDeliveries>
            },
            {
                path: 'completed-deliveries',
                element: <CompletedDeliveries></CompletedDeliveries>
            },

            // admin only routes
            {
                path: 'approve-riders',
                element: <ApproveRiders></ApproveRiders>
            },
            {
                path: 'pending-riders',
                element: <PendingRiders></PendingRiders>
            },
            {
                path: "active-riders",
                element: <ActiveRider></ActiveRider>
            },
            {
                path: 'assign-riders',
                element: <AssignRiders></AssignRiders>
            },
            /* {
              path: 'users-management',
              element: <UsersManagement></UsersManagement>
            } */
        ]
    }

])