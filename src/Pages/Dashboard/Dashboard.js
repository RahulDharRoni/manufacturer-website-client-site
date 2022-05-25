import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    <h1>My DashBoard</h1>
                    <Outlet />
                    <label for="" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-center mt-5 ">

                    <label for="" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <h1>My Dashboard</h1>
                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                        <li><Link to='/dashboard/myorders'>My Order</Link></li>
                        <li><Link to='/dashboard/addreviews'>My Reviews</Link></li>
                        <li><Link to='/dashboard/manageallorder'>Manage Order</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add Products</Link></li>
                        <li><Link to='/dashboard/deleteproducts'>Manage Products</Link></li>
                        <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;