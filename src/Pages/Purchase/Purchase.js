import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import Order from './Order';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { partsId } = useParams();
    const [buy, setBuy] = useState({})
    const [quan, setQuan] = useState('')

    useEffect(() => {
        fetch(`https://enigmatic-anchorage-69503.herokuapp.com/parts/${partsId}`)
            .then(res => res.json())
            .then(data => setBuy(data))
    }, [])


    const handleRestock = (e) => {
        e.preventDefault()
        const quantityValue = e.target.number.value;
        console.log(quantityValue)
        const restockQuantity = parseInt(buy.quantity);
        console.log(restockQuantity)
        setQuan({
            orderQuandity: restockQuantity,
            newQuantityDisplay: quantityValue
        })
    }

    return (
        <div className='py-2 px-5 mx-auto'>
            <h1 className='text-primary font-bold font-3xl'>Order Form</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 mx-auto'>
                <div className='card w-96 bg-base-100 shadow-xl justify-center'>
                    <figure className="px-10 pt-10">
                        <img src={buy.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{buy.name}</h2>
                        <p>{buy.description}</p>
                        <p>{buy._id}</p>
                        <h5>Price:{buy.price}</h5>
                        <h5>Minimum Order:{buy.minOrder}</h5>
                        <h5>Quantity Available:{buy.quantity}</h5>
                        <h5>New Quantity: {quan.orderQuandity}</h5>
                        <div className='bg-gray-200 p-5'>
                            <form onSubmit={handleRestock} className="w-50 mx-auto">
                                <h2 className='font-bold'>Give A Quantity You Want</h2>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" name="number" aria-describedby="emailHelp" className="input input-bordered w-full max-w-xs mt-3" />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-lg">
                        <div className="card-body">
                            <Order quan={quan} buy={buy} setBuy={setBuy}></Order>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default Purchase; 