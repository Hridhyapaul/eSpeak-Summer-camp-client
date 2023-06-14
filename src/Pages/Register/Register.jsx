import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast'
import Swal from 'sweetalert2';
import SocialLogin from '../Home/Shared/SocialLogin';
import { useEffect } from 'react';

const Register = () => {
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const password = watch("password");
    const confirm = watch("confirm");

    useEffect(() => {
        setIsSubmitDisabled(password !== confirm);
    }, [password, confirm]);

    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const createUser = result.user;
                console.log(createUser);

                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const registeredUser = { name: data.name, email: data.email, photo: data.photo, role: 'Student' }
                        console.log('User profile updated')
                        fetch('https://e-speak-server-hridhyapaul.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(registeredUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
            })
            .catch(error => {
                console.log(error.message)
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    toast.error('The provided email is already registered.')
                }
            })
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 pb-20 pt-32">
            <h1 className="text-3xl font-bold mb-10">Registration Form</h1>
            <div className="w-[600px] bg-white rounded shadow-md p-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-8">
                        <div className='col-span-1'>
                            <label htmlFor="name" className="block mb-1 font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                placeholder='Enter Your Name'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"

                            />
                            {errors.name && <p className="mt-2 text-[#CC0000]">Name field is required</p>}
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="email" className="block mb-1 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                placeholder='Enter Your Email'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"

                            />
                            {errors.email && <p className="mt-2 text-[#CC0000]">Email field is required</p>}
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="password" className="block mb-1 font-medium">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*\d)(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[-!@#$&*])/
                                    })}
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

                                {errors.password?.type === 'required' && <p className="mt-2 text-[#CC0000]">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="mt-2 text-[#CC0000]">Password must be 6 character</p>}
                                {errors.password?.type === 'pattern' && <p className="mt-2 text-[#CC0000]">Password must have one uppercase, one lowercase, one number & one special character</p>}
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="confirmPassword" className="block mb-1 font-medium">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                {...register("confirm", { required: true })}
                                placeholder='Enter Confirm Password'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"

                            />
                            {errors.confirm && <p className="mt-2 text-[#CC0000]">Confirm password is required</p>}
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="photoURL" className="block mb-1 font-medium">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                {...register("photo", { required: true })}
                                placeholder='Enter Photo URL'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"

                            />
                            {errors.photo && <p className="mt-2 text-[#CC0000]">PhotoURL field is required</p>}
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="gender" className="block mb-1 font-medium">
                                Gender
                            </label>
                            <select
                                name='gender'
                                {...register("gender", { required: true })}
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"

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
                                {...register("phone", { required: true })}
                                placeholder='Enter Phone Number'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"

                            />
                            {errors.phone && <p className="mt-2 text-[#CC0000]">Phone number field is required</p>}
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="address" className="block mb-1 font-medium">
                                Address
                            </label>
                            <textarea
                                {...register("address", { required: true })}
                                placeholder='Enter Your Address'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"

                            ></textarea>
                            {errors.address && <p className="mt-2 text-[#CC0000]">Address field is required</p>}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={`${isSubmitDisabled? 'bg-[#082A5E] bg-opacity-50 opacity-50' : 'bg-[#082A5E]'} w-full  text-white rounded py-2 px-4 font-semibold transform hover:scale-105 duration-300 mt-8 mb-4`}
                        disabled={isSubmitDisabled}
                    >
                        Register
                    </button>
                </form>
                <SocialLogin></SocialLogin>
                <div className='flex justify-center mt-5'>
                    <p className='text-[16px]'>Already have an account? <Link to='/login' className='text-[#082A5E] font-semibold'>Login</Link></p>
                </div>
            </div>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
        </div>
    );
};

export default Register;