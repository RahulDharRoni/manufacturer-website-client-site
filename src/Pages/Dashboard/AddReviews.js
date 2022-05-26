import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const AddReviews = () => {
    const [review, setReviews] = useState()
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log(data)
        fetch('https://enigmatic-anchorage-69503.herokuapp.com/reviews', {
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
            <div className=" card w-96 bg-base-100 shadow-xl">
                <h1 className='font-bold text-center'>Add Product </h1>
                <form onSubmit={handleSubmit(onSubmit)} className='p-3'>
                    <input type="text" name='name' placeholder='Name' className="input input-bordered w-full mt-3" {...register("name", { required: true })} />
                    <input type="text" name='description' placeholder='Review' className="input input-bordered w-full mt-3" {...register("description", { required: true })} />

                    <input type="url" name="img" placeholder="Image" className="input input-bordered w-full mt-3" {...register("img", { required: true })} />
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Give Rating</label>
                    <select name={review} className="input input-bordered w-full mt-3" {...register("review", { required: true })}>
                        <option selected>Choose A review</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                    </select>
                    <button className="btn btn-primary mt-3">Place An Order</button>

                </form>
            </div>
        </div >
    );
};



export default AddReviews;