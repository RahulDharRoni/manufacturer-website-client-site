import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = data => {
        // console.log(data)
        fetch('https://enigmatic-anchorage-69503.herokuapp.com/parts', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(req => req.json())
            .then(data => {
                console.log(data)
                toast("You Product is add successfully!")
                navigate('/tools')
            })
    };
    return (
        <div className='w-96 mx-auto'>
            <div className=" card w-96 bg-base-100 shadow-xl">
                <h1 className='font-bold text-center'>Add Product </h1>
                <form onSubmit={handleSubmit(onSubmit)} className='p-3'>
                    <input type="text" name='name' placeholder='Product Name' className="input input-bordered w-full mt-3" {...register("name", { required: true })} />
                    <input type="text" name='description' placeholder='Description' className="input input-bordered w-full mt-3" {...register("description", { required: true })} />

                    <input type="url" name="img" placeholder="Image" className="input input-bordered w-full mt-3" {...register("img", { required: true })} />

                    <input type="number" name="min-order" placeholder="Min-Order" className="input input-bordered w-full mt-3" {...register("min-order", { required: true })} />
                    <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full mt-3" {...register("quantity", { required: true })} />
                    <input type="number" name="price" placeholder="Price" className="input input-bordered w-full mt-3"{...register("price", { required: true })} />

                    <button className="btn btn-primary mt-3">Place An Order</button>

                </form>
            </div>
        </div>
    );
};

export default AddProduct; <h1>add products</h1>