import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
import useStudent from '../Hooks/useStudent';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {

    // const isInstructor = false;
    // const isAdmin = true;
    // const isUser = false;

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();

    return (
        <div className="drawer lg:drawer-open pt-[70px]">
            <Helmet>
                <title>eSpeak | Dashboard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-start mx-8 my-16">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#082A5E] text-[white] text-[16px] font-semibold">
                    {/* Sidebar content here */}
                    {isInstructor && (
                        <>
                            <li>
                                <NavLink to="/dashboard/addClass" activeClassName="active">Add a Class</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myClasses" activeClassName="active">My Classes</NavLink>
                            </li>
                        </>
                    )}
                    {isStudent && (
                        <>
                            <li>
                                <NavLink to="/dashboard/selectedClass" activeClassName="active">My Selected Class</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/enrolledClasses" activeClassName="active">My Enrolled Class</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/payment" activeClassName="active">Payment</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/paymentHistory" activeClassName="active">Payment History</NavLink>
                            </li>
                        </>
                    )}
                    {isAdmin && (
                        <>
                            <li>
                                <NavLink to="/dashboard/manageClasses" activeClassName="active">Manage Classes</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageUsers" activeClassName="active">Manage Users</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;