import { Link, NavLink, Navigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import useCart from "../../../../Hooks/useCart";
import useStudent from "../../../../Hooks/useStudent";
// import { useState } from "react";
import '../Navigation/Navigation.css'
import useAdmin from "../../../../Hooks/useAdmin";
import useInstructor from "../../../../Hooks/useInstructor";
import logo from "../../../../assets/logo.svg"
import Container from "../Container";
import avatarImg from "../../../../assets/placeholder.jpg";
import { AiOutlineMenu } from "react-icons/ai";

const Navigation = () => {
    const { user, logOut } = useAuth();
    const [carts] = useCart();
    console.log(carts)

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();
    // const [isDarkMode, setIsDarkMode] = useState(false);

    const handleLogout = () => {
        logOut()
            .then(() => {

            }).catch((error) => {
                // An error happened.
            });
    }

    // const toggleDarkMode = () => {
    //     setIsDarkMode(!isDarkMode);
    // };


    const navItems = <>
        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <NavLink to='/instructors'><li><a>Instructors</a></li></NavLink>
        <NavLink to='/classes'><li><a>Classes</a></li></NavLink>
    </>
    return (
        <div className="fixed z-10 w-full bg-white shadow-md font-body">
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-[#082A5E]">
                                {navItems}
                            </ul>
                        </div>
                        <div>
                            <Link to="/">
                                <img className="w-32" src={logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[16px] font-semibold text-[#082A5E]">
                            {navItems}
                        </ul>
                    </div>

                    {/* Dropdown */}
                    <div className="navbar-end space-x-4">
                        {isStudent ? (
                            <div>
                                <Link to='/dashboard/selectedClass'>
                                    <label className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            <span className="badge badge-sm indicator-item">+{carts.length || 0}</span>
                                        </div>
                                    </label>
                                </Link>
                            </div>
                        ) : null}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0}>
                                <div
                                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                                >
                                    <AiOutlineMenu className="text-lg" />
                                    <div className='hidden md:block'>
                                        <img src={user && user.photoURL ? user.photoURL : avatarImg} alt="profile" className='h-8 w-8 rounded-full' />
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">

                                {isInstructor && (
                                    <li><Link to='/dashboard/addClass'>Dashboard</Link></li>
                                )}
                                {isAdmin && (
                                    <li><Link to='/dashboard/manageClasses'>Dashboard</Link></li>
                                )}
                                {isStudent && (
                                    <li><Link to='/dashboard/selectedClass'>Dashboard</Link></li>
                                )}

                                {
                                    user ?
                                        <>
                                            <li className="font-semibold" onClick={handleLogout}><a>Logout</a></li>
                                        </>
                                        :
                                        <>
                                            <Link to="/login" className="font-semibold"><li><a>Login</a></li></Link>
                                            <Link to="/register" className="font-semibold"><li><a>Register</a></li></Link>
                                        </>
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navigation;