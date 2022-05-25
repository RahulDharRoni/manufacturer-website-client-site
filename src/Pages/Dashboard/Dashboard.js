import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col bg-slate-50">
                    <h1>My DashBoard</h1>
                    <Outlet />
                    <label for="" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-center bg-blue-900 ">

                    <label for="" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg- text-base-content text-white">
                        <h1 className='bg-black p-5'>My Dashboard</h1>
                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
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
        </div>
    );
};

export default Dashboard;