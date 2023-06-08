import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 pb-20 pt-32">
            <h1 className="text-3xl font-bold mb-10">Registration Form</h1>
            <div className="w-[600px] bg-white rounded shadow-md p-12">
                <form>
                    <div className="grid grid-cols-2 gap-8">
                        <div className='col-span-1'>
                            <label htmlFor="name" className="block mb-1 font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                name='name'
                                placeholder='Enter Your Name'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                                required
                            />
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="email" className="block mb-1 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder='Enter Your Email'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                                required
                            />
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="password" className="block mb-1 font-medium">
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
                        <div className='col-span-1'>
                            <label htmlFor="confirmPassword" className="block mb-1 font-medium">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name='confirm'
                                placeholder='Enter Confirm Password'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                                required
                            />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="photoURL" className="block mb-1 font-medium">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                name='photo'
                                placeholder='Enter Photo URL'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                                required
                            />
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="gender" className="block mb-1 font-medium">
                                Gender
                            </label>
                            <select
                                name='gender'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                                required
                            >
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="phoneNumber" className="block mb-1 font-medium">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name='phone'
                                placeholder='Enter Phone Number'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                                required
                            />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="address" className="block mb-1 font-medium">
                                Address
                            </label>
                            <textarea
                                name='address'
                                placeholder='Enter Your Address'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#082A5E] text-white rounded py-2 px-4 font-semibold transform hover:scale-105 duration-300 mt-8 mb-4"
                    >
                        Register
                    </button>
                </form>
                <div className="flex items-center justify-center space-x-2">
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
                    <p className='text-[16px]'>Not a member? <Link to='/login' className='text-[#082A5E] font-semibold'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;