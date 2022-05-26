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
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-sm'><b>Description :</b><span>{description}</span></p>
                <h5 className='font-bold'>Price: <span>{price}</span> </h5>
                <h5>Min-Order : {minOrder}</h5>
                <h5>Quantity Available :{quantity}</h5>
                <div className="card-actions">
                    <button onClick={() => handleBuyNow(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default Tool;