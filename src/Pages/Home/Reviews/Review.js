import React from 'react';
import ReactStars from "react-rating-stars-component";

const Review = ({ reviewss }) => {
    const { name, review, description, img } = reviewss;

    return (
        <div class="card w-64 bg-base-100 shadow-xl">
            <figure><img className='rounded-full w-24 h-24' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className='text-sm font-gray-200'>{description}</p>
                <div className=''>
                    <ReactStars
                        count={review}
                        size={25}
                        // isHalf={true}
                        // emptyIcon={<i className="far fa-star"></i>}
                        // halfIcon={<i className="fa fa-star-half-alt"></i>}
                        // fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#FFFF00"
                    />
                </div>
            </div>
        </div>
    );
};

export default Review;