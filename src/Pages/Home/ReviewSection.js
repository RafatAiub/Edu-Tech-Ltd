import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Review from './Review';


const ReviewSection = () => {

    const [reviews, setupReviews] = useState([]);
    console.log(reviews);
    useEffect(() => {
        fetch('https://damp-spire-74934.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setupReviews(data))
    }, [])
    return (
        <div>
            <h1 className='text-primary text-4xl text-center font-bold'>Customer Reviews</h1>
            <div className="p-2 carousel carousel-center max-w  space-x-2 bg-neutral rounded-box grid md:grid-cols-5 sm:grid-cols-2 gap-x-2">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }




            </div>
        </div >
    );
};

export default ReviewSection;