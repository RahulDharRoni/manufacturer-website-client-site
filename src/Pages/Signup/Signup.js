import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../Hooks/useToken';
import Loading from '../Loading/Loading';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(user || googleUser)



    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    if (token) {
        navigate('/tools')
    }
    if (error || gError) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
    }
    return (
        <div>
            <div className='flex justify-center h-screen items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* name */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is Required!"
                                        },
                                    })}
                                    type="name"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs" />

                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                </label>
                            </div>
                            {/* email input */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is Required!"
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                            message: "Provide a valid Email! Please "
                                        }
                                    })}
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs" />

                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                </label>
                            </div>
                            {/* password input */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is Required!"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Provide a valid password! Please "
                                        }
                                    })}
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered w-full max-w-xs" />

                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {/* submit */}
                            <input className="btn w-full max-w-xs text-white" type="submit" value='Register' />
                            {/* {signUnErrorMessage} */}
                        </form>
                        {/* create account */}
                        <p className='text-center'> Already Have Account?<Link to="/login" className='text-primary'>Login</Link> </p>

                        {/* divider and google button */}
                        <div className="divider">OR</div>
                        <div className="card-actions justify-center">
                            <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-block">Google</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Signup;