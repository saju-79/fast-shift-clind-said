
import ShareLogo from '../shareLayouts/ShareLogo';
import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';
import AuthInfo from '../authContext/farebagseAurh/AuthInfo';
// import { Link } from 'react-router';

const Navber = () => {
    const { user, handelSignOut } = AuthInfo()

    const handelout = () => {
        handelSignOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "successful SignOut ",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
    // console.log(user)
    const naveItems = <>
        <li><NavLink className={({ isActive }) => isActive ? "text-sm md:text-lg lg:text-lg font-semibold bg-[#CAEB66] text-[#606060] " : "text-sm md:text-lg lg:text-lg font-semibold text-[#606060] hover:bg-[#CAEB6670]"} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-sm md:text-lg lg:text-lg font-semibold bg-[#CAEB66] text-[#606060] " : "text-sm md:text-lg lg:text-lg font-semibold text-[#606060] hover:bg-[#CAEB6670]"} to='/oders'>Track Order</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-sm md:text-lg lg:text-lg font-semibold bg-[#CAEB66] text-[#606060] " : "text-sm md:text-lg lg:text-lg font-semibold text-[#606060] hover:bg-[#CAEB6670]"} to='/about'>About Us</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-sm md:text-lg lg:text-lg font-semibold bg-[#CAEB66] text-[#606060] " : "text-sm md:text-lg lg:text-lg font-semibold text-[#606060] hover:bg-[#CAEB6670]"} to='/calculate'>Pricing</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-sm md:text-lg lg:text-lg font-semibold bg-[#CAEB66] text-[#606060] " : "text-sm md:text-lg lg:text-lg font-semibold text-[#606060] hover:bg-[#CAEB6670]"} to='/parcel'>Send Parcel</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-sm md:text-lg lg:text-lg font-semibold bg-[#CAEB66] text-[#606060] " : "text-sm md:text-lg lg:text-lg font-semibold text-[#606060] hover:bg-[#CAEB6670]"} to='/raider'>Be a Rider</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-sm md:text-lg lg:text-lg font-semibold bg-[#CAEB66] text-[#606060] " : "text-sm md:text-lg lg:text-lg font-semibold text-[#606060] hover:bg-[#CAEB6670]"} to='/covarage'>Coverage</NavLink></li>
        {
            user && <>
                <li><NavLink className={({ isActive }) => isActive ? "text-sm md:text-lg lg:text-lg font-semibold bg-[#CAEB66] text-[#606060] " : "text-sm md:text-lg lg:text-lg font-semibold text-[#606060] hover:bg-[#CAEB6670]"} to='/dashboard'>Dashboard</NavLink></li>
            </>
        }

    </>
    return (

        <div className="navbar bg-base-100 shadow-sm rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 gap-2 shadow">
                        {naveItems}
                    </ul>
                </div>
                <div className=" text-xl">
                    <ShareLogo></ShareLogo>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-3 gap-2">
                    {naveItems}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user?.email ? <>
                        <button onClick={handelout} className='text-[#1f1f1f] text-sm md:text-lg lg:text-xl rounded-[ 12px]  px-6 py-4  btn bg-[#CAEB66]'>Sign Out</button>
                    </> : <>
                        <Link to='/login'> <button className='text-[#606060] text-sm md:text-lg lg:text-xl rounded-[ 12px]  px-6 py-4  btn bg-[#ffffff60]'>Sign In </button></Link>
                        <Link to='/register'><button className='text-[#1F1F1F] text-sm md:text-lg lg:text-xl rounded-[ 12px]  px-6 py-4  btn bg-[#CAEB66]'>Sign Up</button></Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navber;