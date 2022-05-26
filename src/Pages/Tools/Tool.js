import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, description, img, price, minOrder, quantity
    } = tool;
    const navigate = useNavigate()

    const handleBuyNow = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className='card w-64 bg-base-100 shadow-xl'>
            <figure class="px-5 pt-5">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center">
                <h2 class="card-title">{name}</h2>
                <p className='text-sm'><b>Description :</b><span>{description}</span></p>
                <h5 className='font-bold'>Price: <span>{price}</span> </h5>
                <h5>Min-Order : {minOrder}</h5>
                <h5>Quantity Available :{quantity}</h5>
                <div class="card-actions">
                    <button onClick={() => handleBuyNow(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default Tool;