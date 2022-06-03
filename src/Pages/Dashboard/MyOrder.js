import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ReviewModal from '../Home/ReviewModal';
import OrderView from './OrderView';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);

    console.log(orders);
    useEffect(() => {
        fetch(`https://damp-spire-74934.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <ReviewModal></ReviewModal>

                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>

                        </tr>
                    </thead>



                    <tbody>
                        {
                            orders.map(order => <OrderView
                                key={order._id}
                                order={order}></OrderView>
                            )
                        }

                    </tbody>



                </table>
            </div>

        </div>
    );
};

export default MyOrder;