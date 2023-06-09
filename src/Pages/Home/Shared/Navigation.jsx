import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";

const Navigation = () => {
    const { user, logOut } = useAuth();
    const [carts] = useCart();
    console.log(carts)
    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }
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
            <div className="navbar-end space-x-4">
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
                                    <li onClick={handleLogout}><a>Logout</a></li>
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