import React, { useEffect, useState } from 'react';
import useCommonReviews from '../../Hooks/useCommonReviews';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useCommonReviews()
    return (
        <div>
            <h1 className='text-center font-3xl font-bold my-6'>All Reviews</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 m-5'>
                {
                    reviews?.slice(0, 3).reverse().map(reviewss => <Review reviewss={reviewss}></Review>)
                }

            </div>


        </div>
    );
};

export default Reviews;