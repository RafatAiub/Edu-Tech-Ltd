import React from 'react';
import { toast } from 'react-toastify';

const Order = ({ tool }) => {
    const { name, minimum, available } = tool;
    const handlePlaceOrder = (event) => {
        const quantity = event.target.quantity.value;
        console.log(quantity);
        if (quantity > available && quantity < minimum) {
            toast.error('please set the correct quantity');
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

                <button className="btn btn-primary my-5">Order</button>

            </form>
        </div>
    );
};

export default Order;