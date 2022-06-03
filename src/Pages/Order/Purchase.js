import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Order from './Order';

const Purchase = () => {
    const { _id } = useParams();
    const [tool, setTool] = useState([]);
    const { img, name, price, minimum, available, description } = tool;
    useEffect(() => {
        fetch(`https://damp-spire-74934.herokuapp.com/tools/${_id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [_id])

    return (
        <>
            <div className="card lg:card-side w-96 justify-center mx-auto  bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between'>
                        <p className='text-sm'>Minimum order:{minimum} pieces</p>
                        <p className='border rounded-lg text-sm bg-slate-400 p-1 text-center'>TK.{price} per piece</p>
                    </div>
                    <p className='text-center'>Available Quantity:{available}</p>


                </div>
            </div>
            <Order tool={tool}></Order>
        </>
    );
};

export default Purchase;