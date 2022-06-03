import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const CancelModal = ({ Product }) => {
    const [user] = useAuthState();

    const handleDelete = () => {
        fetch(`https://damp-spire-74934.herokuapp.com/`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`is deleted.`)

                }
            })
    }
    return (
        <>

            <input type="checkbox" id="cancel-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure to cancel this order??</h3>
                    <div class="modal-action">
                        <label onClick={() => handleDelete()} for="cancel-modal" class="btn">Yes</label>
                    </div>
                </div>
            </div></>
    );
};

export default CancelModal;