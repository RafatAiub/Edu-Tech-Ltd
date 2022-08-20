import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHandsHelping, FaFlagCheckered, FaLayerGroup, FaRegThumbsUp } from 'react-icons/fa';
import React from 'react';

const BusinessSummary = () => {
    const flag = <FontAwesomeIcon icon="fa-solid fa-flag" />
    return (
        <div className='text-center'>
            <h1 className='text-secondary font-bold text text-4xl'>Students Trust Us</h1>
            <h4 className='font-bold text-2xl'>Try To Understand Student expectation</h4>

            <div className="card card-compact  bg-base-100 shadow-xl grid grid-cols-4 py-5">
                <div>
                    <figure className='text-5xl text-secondary'><FaFlagCheckered /></figure>
                    <div className="text-center ">
                        <h2 className="text-3xl font-bold">17</h2>
                        <p className='text-secondary text-lg'>Countries</p>

                    </div>
                </div>
                <div>
                    <figure className='text-5xl text-secondary'><FaHandsHelping /></figure>
                    <div className="text-center ">
                        <h2 className="text-3xl font-bold">273+</h2>
                        <p className='text-secondary text-lg'>Happy students</p>

                    </div>
                </div>
                <div>
                    <figure className='text-5xl text-secondary'><FaLayerGroup></FaLayerGroup></figure>
                    <div className="text-center ">
                        <h2 className="text-3xl font-bold">123M+</h2>
                        <p className='text-secondary text-lg'>Annual Revenue</p>

                    </div>
                </div>
                <div>
                    <figure className='text-5xl text-secondary'><FaRegThumbsUp /></figure>
                    <div className="text-center ">
                        <h2 className="text-3xl font-bold">432+</h2>
                        <p className='text-secondary text-lg'>Feedbacks</p>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default BusinessSummary;