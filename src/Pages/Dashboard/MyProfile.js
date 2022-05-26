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
        fetch('https://enigmatic-anchorage-69503.herokuapp.com/profile', {
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
        <div className="card card-side bg-base-100 w-50 bg-gray-100 p-10">
            <div className="grid grid-cols-2 gap-3 items-center">
                <div>
                    <img src={user.photoURL} alt="" width='100px' height='100px' className='rounded' />
                    {/* <img src="" alt=""/> */}
                    <h1 className="text-3xl font-bold">Email: {user?.email}</h1>
                    {(user.name === true) ? < h1 className="text-3xl font-bold">Name: <span>{user?.name}</span></h1> : <h1 className="text-3xl font-bold">Name : Not Found!</h1>}
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='p-3'>
                    <h5>Update your Profile Information</h5>
                    <input type="url" name="img" placeholder="Image" className="input input-bordered w-full mt-2" {...register("img", { required: true })} />
                    <h2 className="card-title">Name:{user?.name}</h2>
                    <input type="text" name='name' placeholder='Name' className="input input-bordered w-full mt-2" {...register("name", { required: true })} />
                    <h2 className="card-title">Description:{user?.Description}</h2>
                    <input type="text" name='description' placeholder='Description' className="input input-bordered w-full mt-2" {...register("description", { required: true })} />
                    <button className="btn btn-primary mt-3">Place An Order</button>

                </form>
            </div>

        </div >
    );
};

export default MyProfile;