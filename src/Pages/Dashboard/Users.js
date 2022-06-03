import React from 'react';
import { toast } from 'react-toastify';

const Users = ({ user }) => {
    const { _id, email, role } = user;
    const makeAdmin = () => {
        fetch(`https://damp-spire-74934.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount > 0) {
                toast.success(`Successfully make an admin`);
            }
            else {
                toast.error(`failed to make an admin`);
            }

        })
    }
    return (
        <div className="stats bg-primary text-primary-content m-3">

            <div className="stat">
                <div className="stat-title text-right font-mono"> {_id}</div>
                <div className="text-2xl">{email}</div>
                <div className="stat-actions">
                    {
                        role !== 'admin' && <>
                            <button className="btn btn-sm btn-danger">Delete</button>
                            <button className="btn btn-sm btn-danger m-2" onClick={makeAdmin}>Make Admin</button>
                        </>
                    }

                </div>
            </div>

        </div>
    );
};

export default Users;