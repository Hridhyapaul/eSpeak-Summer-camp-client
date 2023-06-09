import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open pt-[70px]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-start justify-start mx-8 my-16">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#082A5E] text-[white] text-[16px] font-semibold">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/selectedClass'>My Selected Class</NavLink></li>
                    <li><NavLink to='/dashboard/enrolledClass'>My Enrolled Class</NavLink></li>
                    <li><NavLink to='/dashboard/paymentHistory'>Payment History</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;