import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import PrimaryButton from '../Share/PrimaryButton/PrimaryButton';
import "./Navbar.css"

const Navbar = () => {
    const links = <>
        <NavLink to="/">Home </NavLink> 
        <NavLink to="/shop">Shop</NavLink> 
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/aboutUs">About Us</NavLink>
    </>
    return (
        <div className='bg-black text-base-200 sticky top-0 z-50'>
            <div className="navbar w-[95%] m-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 space-y-3 p-4 shadow">
                                {links}
                        </ul>
                    </div>
                    <Link><img src={logo} className='w-[200px]' alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4 text-base">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login"><PrimaryButton text={"Login"}></PrimaryButton></Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;