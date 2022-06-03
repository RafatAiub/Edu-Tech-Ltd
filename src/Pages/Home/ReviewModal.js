import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ReviewModal = ({ Product }) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const today = new Date(),
        date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const handleReview = event => {
        navigate('/');
        event.preventDefault();

        const review = {
            customer: user?.displayName,
            text: event.target.text.value,
            date: date,
            rating: event.target.rating.value
        }
        fetch('https://damp-spire-74934.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Thanks ${user.displayName} for your valuable  Review`);

                }
            });

    }
    return (
        <div>
            <input type="checkbox" id="review-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="review-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Review Page</h3>
                    <form onSubmit={handleReview} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                        <textarea name="text" className="textarea textarea-success w-full max-w-xs" placeholder="please write your review"></textarea>
                        <label className='text-secondary font-bold'>Rating Now</label>
                        <select name="rating" placeholder='stars' className="select select-bordered w-full max-w-xs text-lg text-secondary-focus">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>

                        </select>


                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;