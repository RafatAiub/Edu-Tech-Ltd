import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L6SZ8GTsQfVYPnKTkqz0o6YYorXy0h4Z3jJxn5NNGScq5focEdtDnyfEU2GFeXt4NuTPzgFcBHgxYM081W2yIRx00QRqjP6D7');
const Payment = () => {
    const { id } = useParams();
    const url = `https://damp-spire-74934.herokuapp.com/orders/${id}`;
    const [order, setOrder] = useState([]);
    console.log(order);
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setOrder(data));
    })

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">{order.Product}</h2>
                            <p>Please Pay ${order.Price}.Tk for each product. The Quantity of products you ordered so far {order.Quantity} pieces  </p>
                            <p className='font-bold'>Price In total : {order.TotalPrice}.Tk</p>
                            {/* <div class="card-actions justify-end">
                                <button class="btn btn-primary">Pay Now</button>
                            </div> */}
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm order={order} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;