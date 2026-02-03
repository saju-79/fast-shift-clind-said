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



export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/about',
                Component: AboutUs,
            },
            {
                path: "/raider",
                Component: Raider
            },
            {
                path: "/calculate",
                Component: Calculate
            },
            {
                path: '/oders',
                Component: TacOder
            },
            {
                path: '/parcel',
                Component: Parcel
            },
            {
                path: '/covarage',
                Component: Covarage
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
    }

])