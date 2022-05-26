import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const AddReviews = () => {
    const [review, setReviews] = useState()
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log(data)
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(req => req.json())
            .then(data => {
                console.log(data)
                setReviews(null)
            })
        toast("Wow so easy!")

    };

    return (
        <div className='w-96 mx-auto'>
            <div class=" card w-96 bg-base-100 shadow-xl">
                <h1 className='font-bold text-center'>Add Product </h1>
                <form onSubmit={handleSubmit(onSubmit)} className='p-3'>
                    <input type="text" name='name' placeholder='Name' class="input input-bordered w-full mt-3" {...register("name", { required: true })} />
                    <input type="text" name='description' placeholder='Review' class="input input-bordered w-full mt-3" {...register("description", { required: true })} />

                    <input type="url" name="img" placeholder="Image" class="input input-bordered w-full mt-3" {...register("img", { required: true })} />
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Give Rating</label>
                    <select name={review} class="input input-bordered w-full mt-3" {...register("review", { required: true })}>
                        <option selected>Choose A review</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                    </select>
                    <button class="btn btn-primary mt-3">Place An Order</button>

                </form>
            </div>
        </div>
    );
};



export default AddReviews;