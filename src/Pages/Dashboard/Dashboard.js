import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to the Dashboard {user.displayName}</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Dashboard</Link></li>
                    <li><Link to="/dashboard/review">Review Section</Link></li>
                    <li><Link to="/dashboard/history">My Profile</Link></li>
                    {user && <>
                        <li><Link to="/dashboard/users">Show Users</Link></li>
                        <li><Link to="/dashboard/addTool">Insert A New tool</Link></li>



                    </>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;