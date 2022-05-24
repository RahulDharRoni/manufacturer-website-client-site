import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, description, img, price, minOrder, quantity
    } = tool;
    const navigate = useNavigate()

    const handleBuyNow = id => {
        navigate(`/parts/${id}`)
    }
    return (
        <div className='card w-64 bg-base-100 shadow-xl'>


            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p className='text-sm'>{description}</p>
                <p>{_id}</p>
                <h5>{price}</h5>
                <h5>{minOrder}</h5>
                <h5>{quantity}</h5>
                <div class="card-actions">
                    <button onClick={() => handleBuyNow(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default Tool;