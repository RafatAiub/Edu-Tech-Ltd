import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Pages/Shared/Loading';
import Users from './Users';

const AllUsers = () => {
    // const { refetch } = useQuery();

    // const { data: users, isLoading } = useQuery('users', () => fetch('https://damp-spire-74934.herokuapp.com/user', {
    //     method: 'GET',
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()));
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    const [users, setUsers] = useState([]);
    console.log(users);


    useEffect(() => {
        fetch('https://damp-spire-74934.herokuapp.com/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-5 my-5'>

            {
                users.map(user => <Users
                    key={user._id}
                    user={user}
                ></Users>)
            }
        </div>
    );
};

export default AllUsers;