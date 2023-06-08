import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navigation = () => {
    const { user } = useAuth();
    const navItems = <>
        <Link to='/'><li><a>Home</a></li></Link>
        <Link to='/instructors'><li><a>Instructors</a></li></Link>
        <Link to='/classes'><li><a>Classes</a></li></Link>
    </>
    return (
        <div className="navbar px-4 fixed z-10 max-w-screen-xl mx-auto shadow-md bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-[#082A5E]">
                        {navItems}
                    </ul>
                </div>
                <a className="normal-case text-2xl font-bold"><span className="text-[#FF4667]">e</span><span className="text-[#082A5E]">Speak</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[16px] font-semibold text-[#082A5E]">
                    {navItems}
                </ul>
            </div>
            
            {/* Dropdown */}
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        {
                            user ?
                                <>
                                    <li><a>Logout</a></li>
                                </>
                                :
                                <>
                                    <Link to="/login"><li><a>Login</a></li></Link>
                                    <Link to="/register"><li><a>Register</a></li></Link>
                                </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;