import React from 'react';
import RateStar from './RateStar';

const Review = ({ review }) => {
    const { customer, text, date, rating } = review;
    return (

        <div className="card w-full bg-base-100 shadow-xl flex m-5">
            <div className="card-body carousel-item relative">
                <h2 className="card-title">{customer}</h2>
                <p>{text}</p>
                <div className='flex items-center items-center'>
                    <div className='text-primary font-bold text-xl'>
                        <span >{rating}</span>stars
                    </div>
                    <div className="card-actions justify-start rating rating-sm">
                        <input type="radio" value={rating} name="rating-9" className="rating-hidden" />
                        <RateStar rating={rating}></RateStar>

                    </div>
                </div>
                <div className="card-actions justify-end">
                    {date}
                </div>

            </div>


        </div>
    );
};

export default Review;