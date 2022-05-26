import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    console.log(user.photoURL)
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/profile', {
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
        <div class="card card-side bg-base-100 w-50 bg-gray-100 p-10">
            <div class="grid grid-cols-2 gap-3 items-center">
                <div>
                    <img src={user.photoURL} alt="" width='100px' height='100px' className='rounded' />
                    {/* <img src="" alt=""/> */}
                    <h1 class="text-3xl font-bold">Email: {user?.email}</h1>
                    {(user.name === true) ? < h1 class="text-3xl font-bold">Name: <span>{user?.name}</span></h1> : <h1 class="text-3xl font-bold">Name : Not Found!</h1>}
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='p-3'>
                    <h5>Update your Profile Information</h5>
                    <input type="url" name="img" placeholder="Image" class="input input-bordered w-full mt-2" {...register("img", { required: true })} />
                    <h2 class="card-title">Name:{user?.name}</h2>
                    <input type="text" name='name' placeholder='Name' class="input input-bordered w-full mt-2" {...register("name", { required: true })} />
                    <h2 class="card-title">Description:{user?.Description}</h2>
                    <input type="text" name='description' placeholder='Description' class="input input-bordered w-full mt-2" {...register("description", { required: true })} />
                    <button class="btn btn-primary mt-3">Place An Order</button>

                </form>
            </div>

        </div >
    );
};

export default MyProfile;