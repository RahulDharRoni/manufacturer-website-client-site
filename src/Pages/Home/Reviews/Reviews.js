import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-center font-3xl font-bold my-6'>All Reviews</h1>
            <div className='grid grid-cols-4 gap-2'>
                {
                    reviews?.map(reviewss => <Review reviewss={reviewss}></Review>)
                }

            </div>


        </div>
    );
};

export default Reviews;