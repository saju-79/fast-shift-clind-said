import { createBrowserRouter } from "react-router";
import Layout from "../root/Layout";
import Home from "../pages/home/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Register from "../pages/Register";



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
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register,
            }
        ]
    }

])