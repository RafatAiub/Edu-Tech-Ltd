import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-4xl font-bold text-gray text-center'>Welcome to Tool Plaza <br /> <span className='text-secondary font-mono text-xl'>{user.displayName}</span>  </h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        user && !admin && <>
                            <li><Link to="/dashboard/">My Order</Link></li>
                            <li><Link to="/dashboard/review">Rating Now</Link></li>
                        </>
                    }
                    <li><Link to="/dashboard/history">My Profile</Link></li>
                    {admin && <>

                        <li><Link to="/dashboard/addTool">ADD PRODUCT</Link></li>
                        <li><Link to="/dashboard/manage-orders">Manage Orders</Link></li>

                        <li><Link to="/dashboard/allUsers">Show Users</Link></li>

                    </>}


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;