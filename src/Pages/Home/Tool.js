import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const navigate = useNavigate();
    const handleBuy = (_id) => {
        navigate(`/purchase/${_id}`);
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={tool.img} alt="Shoes" className="rounded-xl" />

            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{tool.name}</h2>
                <p>{tool.description}</p>
                <p>PRICE : ${tool.price}</p>

                <button className='btn btn-primary' onClick={() => { handleBuy(tool._id) }}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Tool;