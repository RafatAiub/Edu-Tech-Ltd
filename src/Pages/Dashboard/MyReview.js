import React, { useEffect, useState } from 'react';

const MyReview = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://damp-spire-74934.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div>
            {
                tools.map(tool => <div key={tool._id} className='flex items-center justify-center justify-around'>
                    <img src={tool.img} alt="" />
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>

                </div>)
            }

        </div>
    );
};

export default MyReview;