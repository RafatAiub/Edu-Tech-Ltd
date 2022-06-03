import React, { useEffect, useState } from 'react';
import OrderView from './OrderView';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    console.log(orders);
    useEffect(() => {
        fetch(`https://damp-spire-74934.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">

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

        </div>
    );
};

export default ManageOrders;