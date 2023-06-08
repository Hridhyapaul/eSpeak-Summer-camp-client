import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col items-center justify-center bg-base-200 pb-20 pt-32">
            <div className=''>
                <h1 className="text-4xl font-bold text-center text-[#082A5E] mb-8">Login Form</h1>
                <div className="w-80 bg-white rounded shadow-lg p-6">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-gray-800 font-medium mb-1">
                                Email
                            </label>
                            <input type="email" placeholder="Enter your email" className=" w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-800 font-medium ">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                                    placeholder="Enter your password"
                                    required
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
                    <div className="flex items-center justify-center mt-4 space-x-2">
                        <span className="block w-14 h-0.5 bg-gray-300"></span>
                        <span className="text-gray-500">or</span>
                        <span className="block w-14 h-0.5 bg-gray-300"></span>
                    </div>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-3 w-full py-1.5 text-[#082A5E] bg-white border-2 border-[#082A5E] hover:bg-[#082A5E] hover:text-white transform hover:scale-105 duration-300 rounded mt-4"
                    >
                        <FaGoogle></FaGoogle>
                        <p className='font-semibold'>Login with Google</p>
                    </button>

                    <div className='flex justify-center mt-5'>
                        <p className='text-[14px]'>Not a member? <Link to='/register' className='text-[#082A5E] font-semibold'>Register now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;