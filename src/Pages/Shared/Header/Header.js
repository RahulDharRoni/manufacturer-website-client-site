import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import { HiOutlineLibrary } from "react-icons/hi"

const Header = () => {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()
    if (loading) {
        return <Loading></Loading>
    }
    const logout = () => {
        signOut(auth);
        navigate('/login')
    };
    const commonMenu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/purchase'>Purchase</Link></li>
        <li><Link to='/tools'>Tools</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/myportfolio'>Portfolio</Link></li>
        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
        {user ?
            <button onClick={logout} className="btn btn-warning">Log Out</button> :
            <li><Link to='/login'>Login</Link></li>}
    </>
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {commonMenu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><HiOutlineLibrary /> PC HOUSE</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {commonMenu}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;