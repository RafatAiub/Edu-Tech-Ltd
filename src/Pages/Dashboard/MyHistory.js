import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyHistory = () => {
    const [user] = useAuthState(auth);
    const { displayName, email, photoURL, uid } = user;
    console.log(user);
    return (
        <div className="card w-96 glass mx-auto shadow-2xl">
            <figure>
                <img className="mask mask-hexagon-2" src={photoURL} /></figure>
            <div className="card-body">
                <h2 className="card-title">{displayName}</h2>

                <p className='text-secondary'>Email: {email}</p>

                <div className="card-actions justify-end text-xs font-mono">
                    <p className='text-primary'>UserId: {uid}</p>
                </div>


            </div>
        </div>
    );
};

export default MyHistory;