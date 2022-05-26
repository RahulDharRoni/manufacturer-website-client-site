import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log(admin)
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-slate-50">
                    <h1 className='text-center text-3xl font-bold font-serif '>My DashBoard</h1>
                    <Outlet />
                    <label htmlFor="" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-blue-900 ">

                    <label htmlFor="" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content text-white bg-blue-900">
                        <li><Link to='/dashboard'>My Profile</Link></li>

                        <li><Link to='/dashboard/myorders'>My Order</Link></li>
                        <li><Link to='/dashboard/addreviews'>My Reviews</Link></li>
                        {admin && <>
                            <li><Link to='/dashboard/manageorders'>Manage Orders</Link></li>
                            <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
                            <li><Link to='/dashboard/addproduct'>Add Products</Link></li>
                            <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>

                        </>}




                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;