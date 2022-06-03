import React from 'react';


const RateStar = ({ rating }) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<input type="radio" name="rating-9" className="mask mask-star-2" />)
    }
    return (

        <div className='flex justify-center items-center'>
            {stars}
        </div>

    );
};

export default RateStar;