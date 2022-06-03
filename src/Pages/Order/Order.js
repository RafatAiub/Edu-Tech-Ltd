import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Order = ({ tool }) => {
    const [user] = useAuthState(auth);
    const { name, minimum, available, price } = tool;
    const navigate = useNavigate();
    const handlePlaceOrder = async (event) => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const totalPrice = quantity * price;
        const order = {
            Product: name,
            Price: price,
            Customer: user.displayName,
            CustomerEmail: user.email,
            Quantity: quantity,
            TotalPrice: totalPrice
        }
        // send to your database 
        fetch('https://damp-spire-74934.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Order place successfully')

                }
                else {
                    toast.error('Failed to place order');
                }
            })


        console.log(quantity);
        if (quantity > available) {
            toast.error('This number of amount is not available in stock');
        } else if (quantity < minimum) {
            toast.error(`you should order at least ${minimum}`)
        } else {
            // toast.success('your order place successfully');
            navigate('/');

        }
    }
    return (
        <div className='p-5 '>
            <form onSubmit={handlePlaceOrder} className='mx-auto w-96 py-5'>
                <label className="input-group input-group-sm py-5">
                    <span>PRODUCT</span>
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm" value={name} />
                </label>
                <label className="input-group input-group-sm">
                    <span>QUANTITY</span>
                    <input type="text" name='quantity' placeholder="set quantity" className="input input-bordered input-sm" />
                </label>
                <label className="input-group input-group-sm py-5  ">

                    <input type="submit" name='submit'
                        value="ORDER" className="input input-bordered input-sm btn"

                    />
                </label>


            </form>
        </div>
    );
};

export default Order;