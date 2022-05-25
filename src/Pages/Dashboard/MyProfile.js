import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();
    // const [profile, setProfile] = useState()

    // useEffect(() => {
    //     fetch('http://localhost:5000/reviews')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setProfile(data)
    //         })
    // }, [])


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
        <div class="card card-side bg-base-100 w-50">
            <div class="grid grid-cols-2 gap-3">
                <div>

                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='p-3'>
                    <h2>Update Information</h2>
                    <h5 class="">Email: {user?.email}</h5>
                    <h2 class="card-title">Image: {user?.img}</h2>
                    <input type="url" name="img" placeholder="Image" class="input input-bordered w-50 mt-2" {...register("img", { required: true })} />
                    <h2 class="card-title">Name:{user?.name}</h2>
                    <input type="text" name='name' placeholder='Name' class="input input-bordered w-50 mt-2" {...register("name", { required: true })} />
                    <h2 class="card-title">Description:{user?.Description}</h2>
                    <input type="text" name='description' placeholder='Description' class="input input-bordered w-50 mt-2" {...register("description", { required: true })} />
                    <button class="btn btn-primary mt-3">Place An Order</button>

                </form>
            </div>

        </div>
    );
};

export default MyProfile;