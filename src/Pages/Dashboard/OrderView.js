import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CancelModal from '../Home/CancelModal';
import ReviewModal from '../Home/ReviewModal';

const OrderView = ({ order }) => {
    const [disable, setDisable] = useState(false);
    const { Customer, CustomerEmail, Product, Quantity, TotalPrice, _id } = order;
    const paid = false;
    return (

        <tr>

            <td>{Customer}</td>
            <td>{CustomerEmail}</td>
            <td>{Product}</td>
            <td>{TotalPrice}.tk</td>
            <td>{Quantity}</td>

            <td><label
                htmlFor="review-modal"

                className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
            >ADD REVIEW</label>
                <label
                    htmlFor="cancel-modal"

                    className="btn btn-sm  text-white uppercase bg-gradient-to-r from-secondary m-2  btn-danger"
                >CANCEL</label>
                {
                    TotalPrice && !paid && <>
                        <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-sm btn-success text-white uppercase bg-gradient-to-r from-danger to-primary"
                            disabled={disable}
                            onClick={() => setDisable(true)}
                        >
                            PAY NOW
                        </button> </Link>
                    </>
                }
                {
                    TotalPrice && paid && <><span className='text-secondary'>paid</span></>
                }</td>
            {/* <CancelModal Product={Product}></CancelModal> */}
            <ReviewModal Product={Product}></ReviewModal>
        </tr>


    );
};

export default OrderView;