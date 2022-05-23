import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    if (user || googleUser) {
        navigate('/tools')
    }
    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    if (error || googleError) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password)
        console.log(data);
    }

    return (
        <div>
            <div className='flex justify-center h-screen items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                            <input className="btn w-full max-w-xs text-white" type="submit" value='Login' />
                            {/* {signInErrorMessage} */}
                        </form>
                        {/* create account */}
                        <p className='text-center'>New User? <Link to="/signup" className='text-primary'>Create An Account</Link> </p>

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

export default Login;