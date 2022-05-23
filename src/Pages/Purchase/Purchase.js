import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Order from './Order';

const Purchase = () => {
    const { partsId } = useParams();
    const [buy, setBuy] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/parts/${partsId}`)
            .then(res => res.json())
            .then(data => setBuy(data))
    }, [])

    return (
        <div className='py-2 px-5 mx-auto'>
            <h1 className='text-primary font-bold font-3xl'>Order Form</h1>
            <div className='grid grid-cols-2 gap-6 mx-auto'>
                <div className='card w-96 bg-base-100 shadow-xl justify-center'>
                    <figure class="px-10 pt-10">
                        <img src={buy.img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{buy.name}</h2>
                        <p>{buy.description}</p>
                        <p>{buy._id}</p>
                        <h5>Price:{buy.price}</h5>
                        <h5>Minimum Order:{buy.minOrder}</h5>
                        <h5>Quantity Available:{buy.quantity}</h5>
                        <button class="btn">Quantity Increase</button>
                    </div>
                </div>
                <div>
                    <div class="card w-96 bg-base-100 shadow-lg">
                        <div class="card-body">
                            <Order buy={buy} setBuy={setBuy}></Order>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase; 