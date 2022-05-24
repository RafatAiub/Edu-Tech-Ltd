import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { _id } = useParams();
    const [tool, setTool] = useState([]);
    const { img, name, price, minimum, available, description } = tool;
    fetch(`http://localhost:5000/tools/${_id}`)
        .then(res => res.json())
        .then(data => setTool(data))

    return (
        <div class="card lg:card-side w-96 mx-auto bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <p>{available}</p>
                <p>{minimum}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Order</button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;