import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import Order from './Order';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { partsId } = useParams();
    const [buy, setBuy] = useState({})
    // const [mobile, setMobile] = useState("");
    const [quan, setQuan] = useState('')
    // const [name, setName] = useState('')
    useEffect(() => {
        fetch(`http://localhost:5000/parts/${partsId}`)
            .then(res => res.json())
            .then(data => setBuy(data))
    }, [])

    // const updateUser = (e) => {

    //     // setName(e.target.value);
    //     console.log(e)

    // }

    const handleRestock = (e) => {
        e.preventDefault()
        const quantityValue = e.target.number.value;
        console.log(quantityValue)
        const restockQuantity = parseInt(buy.quantity) + parseInt(quantityValue);
        console.log(restockQuantity)
        setQuan({ orderQuandity: restockQuantity })
    }

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
                        <h5>New Quantity: {quan.orderQuandity}</h5>
                        <div className='bg-gray-200 p-5'>
                            <form onSubmit={handleRestock} className="w-50 mx-auto">
                                <h2 className='font-bold'>Give A Quantity You Want</h2>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label"></label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" name="number" aria-describedby="emailHelp" className="input input-bordered w-full max-w-xs mt-3" />
                                </div>

                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        {/* <input type="text" value={name} onChange={handleOnchange} /> <br /><br /> */}
                        {/* <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input class="input input-bordered input-gray-200 w-full max-w-xs mt-3" type="number" {...register("age", { min: 18, max: 99 })} />
                                <input type="submit" class="btn btn-outline mt-3" />
                            </form>
                        </div> */}
                    </div>
                </div>
                <div>
                    <div class="card w-96 bg-base-100 shadow-lg">
                        <div class="card-body">
                            <Order quan={quan} buy={buy} setBuy={setBuy}></Order>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase; 