import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Order from './Order';

const Purchase = () => {
    const { _id } = useParams();
    const [tool, setTool] = useState([]);
    const { img, name, price, minimum, available, description } = tool;
    fetch(`http://localhost:5000/tools/${_id}`)
        .then(res => res.json())
        .then(data => setTool(data))

    return (
        <>
            <div class="card lg:card-side w-96 justify-center mx-auto  bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price:{price}</p>
                    <p>Available:{available}</p>
                    <p>Minimum Units to order[{minimum}]</p>

                </div>
            </div>
            <Order tool={tool}></Order>
        </>
    );
};

export default Purchase;