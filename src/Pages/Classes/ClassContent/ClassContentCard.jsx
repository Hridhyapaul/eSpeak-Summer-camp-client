import React from 'react';
import { RxCounterClockwiseClock, RxReader } from "react-icons/rx";
import { LuUsers } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';

const ClassContentCard = ({ course }) => {
    console.log(course)
    const { _id, category, duration, description, fee, image, modules, instructor, rating, enrolled, title } = course
    const { user } = useAuth();
    const [carts, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleCart = (course) => {
        console.log(course)
        if (user && user.email) {
            const cartItem = { courseId: _id, image, title, duration, fee, modules, instructor, email: user?.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Course added to cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select this course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="grid grid-cols-3 gap-3 p-4 bg-white rounded-lg shadow my-6">
            <div className="col-span-1">
                <img className="w-full h-[275px] rounded-md object-cover" src={image} alt="Instructor" />
            </div>
            <div className="ml-4 col-span-2">
                <div className='flex justify-between items-center'>
                    <h3 className="bg-[#E7EFFC] text-[#1363DF] text-sm lg:text-[16px] mx-auto lg:mx-0 font-semibold rounded-full px-4 py-2 w-fit">{category}</h3>
                    <p className='text-xl text-[#1363DF] font-bold'>${fee}</p>
                </div>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <div className="flex justify-start gap-10 py-3">
                    <span className="flex justify-center items-center gap-1 font-normal text-md text-[#082A5E] mr-2"><RxReader></RxReader> {modules} lessons</span>
                    <span className="flex justify-center items-center gap-1 font-normal text-md text-[#082A5E] mr-2"> <RxCounterClockwiseClock></RxCounterClockwiseClock>{duration}</span>
                    <span className="flex justify-center items-center gap-1 font-normal text-md text-[#082A5E] mr-2"> <LuUsers></LuUsers>{enrolled} students</span>
                    <span className='flex items-center gap-1'>
                        <FaStar className='text-[#FFD700]'></FaStar>
                        ({rating})
                    </span>
                </div>
                <p className="text-gray-700">
                    {description}
                </p>
                <hr className='my-5' />
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/fHqnkGQ/pexels-andrea-piacquadio-762020.jpg" />
                            </div>
                        </div>
                        <p className='font-semibold'>{instructor}</p>
                    </div>
                    <div className='space-x-3'>
                        <button onClick={() => handleCart(course)} className='bg-[#082A5E] px-4 py-2 rounded-full text-white'>Add to Cart</button>
                        <button className='bg-[#082A5E] px-4 py-2 rounded-full text-white'>Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassContentCard;