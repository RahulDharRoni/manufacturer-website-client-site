import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log(data)
        fetch('http://localhost:5000/parts', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(req => req.json())
            .then(data => {
                console.log(data)
            })
    };
    return (
        <div className='w-96 mx-auto'>
            <div class=" card w-96 bg-base-100 shadow-xl">
                <h1 className='font-bold text-center'>Add Product </h1>
                <form onSubmit={handleSubmit(onSubmit)} className='p-3'>
                    <input type="text" name='name' placeholder='Product Name' class="input input-bordered w-full mt-3" {...register("name", { required: true })} />
                    <input type="text" name='description' placeholder='Description' class="input input-bordered w-full mt-3" {...register("description", { required: true })} />

                    <input type="url" name="img" placeholder="Image" class="input input-bordered w-full mt-3" {...register("img", { required: true })} />

                    <input type="number" name="min-order" placeholder="Min-Order" class="input input-bordered w-full mt-3" {...register("min-order", { required: true })} />
                    <input type="number" name="quantity" placeholder="Quantity" class="input input-bordered w-full mt-3" {...register("quantity", { required: true })} />
                    <input type="number" name="price" placeholder="Price" class="input input-bordered w-full mt-3"{...register("price", { required: true })} />

                    <button class="btn btn-primary mt-3">Place An Order</button>

                </form>
            </div>
        </div>
    );
};

export default AddProduct; <h1>add products</h1>