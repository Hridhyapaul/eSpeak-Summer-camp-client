import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SocialLogin from '../Home/Shared/SocialLogin';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { signIn} = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const signedUser = result.user;
                console.log(signedUser)
                reset();
                Swal.fire({
                    title: 'Welcome back! You have successfully logged in.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    return (
        <div className="flex flex-col items-center justify-center bg-base-200 pb-20 pt-32">
            <div className=''>
                <h1 className="text-4xl font-bold text-center text-[#082A5E] mb-8">Login Form</h1>
                <div className="w-[400px] bg-white rounded shadow-lg p-6">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block text-gray-800 font-medium mb-1">
                                Email
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="Enter your email" className=" w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]" />

                            {errors.email && <p className="mt-2 text-[#CC0000]">Email field is required</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-800 font-medium ">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    {...register("password", { required: true })}
                                    className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                                    placeholder="Enter your password"

                                />
                                <button
                                    type="button"
                                    className="absolute top-4 right-2 text-gray-500 text-[18px]"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <HiOutlineEyeOff></HiOutlineEyeOff>
                                    ) : (
                                        <HiOutlineEye></HiOutlineEye>
                                    )}
                                </button>

                                {errors.password && <p className="mt-2 text-[#CC0000]">Password is required</p>}
                            </div>
                        </div>
                        <label className="label py-0">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <button
                            type="submit"
                            className="w-full bg-[#082A5E] text-white rounded py-2 px-4 font-semibold transform hover:scale-105 duration-300"
                        >
                            Login
                        </button>
                    </form>
                    <div className='mt-5'>
                    <SocialLogin></SocialLogin>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <p className='text-[14px]'>Not a member? <Link to='/register' className='text-[#082A5E] font-semibold'>Register now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;