import { Link } from "react-router-dom";

const Navigation = () => {
    const navItems = <>
        <Link to='/'><li><a>Home</a></li></Link>
        <Link to='/instructors'><li><a>Instructors</a></li></Link>
        <Link to='/classes'><li><a>Classes</a></li></Link>
        <Link to='/dashboard'><li><a>Dashboard</a></li></Link>
    </>
    return (
        <div className="navbar px-4 fixed z-10 max-w-screen-xl mx-auto shadow-md bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-[#6246EA]">
                        {navItems}
                    </ul>
                </div>
                <a className="normal-case text-2xl font-bold"><span className="text-[#FF4667]">e</span><span className="text-[#6246EA]">Speak</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[16px] font-semibold text-[#6246EA]">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end flex justify-end gap-2 text-[white]">
                <Link to='/login'><button className="font-semibold bg-[#6246EA] px-4 py-2 rounded-full">Login</button></Link>
                <Link to='/register'><button className="font-semibold bg-[#6246EA] px-4 py-2 rounded-full">Register</button></Link>
            </div>
        </div>
    );
};

export default Navigation;