import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Tool = ({ tool }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={tool.img} alt="Shoes" className="rounded-xl" />

            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{tool.name}</h2>
                <p>Description {tool.description}</p>
                <p>Per Unit : {tool.price}</p>
                <p>Available :{tool.available}</p>
                <p>Minimum Quantity to order :{tool.minimum}</p>
                <PrimaryButton>Buy Now</PrimaryButton>
            </div>
        </div>
    );
};

export default Tool;