import React from 'react';
import { RxCounterClockwiseClock, RxReader } from "react-icons/rx";
import { LuUsers } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';
import { useState } from 'react';
import useAdmin from '../../../Hooks/useAdmin';
import useInstructor from '../../../Hooks/useInstructor';

const ClassContentCard = ({ course }) => {
    console.log(course)
    const { _id, category, duration, description, price, image, modules, instructor_name, rating, available_seats, title, enrolled_students, instructor_image } = course
    const { user } = useAuth();
    const [carts, refetch] = useCart();
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleCart = (course) => {
        console.log(course)
        if (user && user.email) {
            setIsButtonDisabled(true);
            const cartItem = { courseId: _id, image, title, duration, price, modules, instructor_name, student_email: user?.email, category }
            fetch('https://e-speak-server-ie0i5px7u-hridhyapaul.vercel.app/carts', {
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
        <div className={`grid grid-cols-3 gap-3 p-4 ${available_seats === 0 ? 'bg-red-500 bg-opacity-10' : 'bg-white'} rounded-lg shadow-lg mb-8`}>
            <div className="col-span-1">
                <img className="w-full h-[300px] rounded-md object-cover" src={image} alt="Instructor" />
            </div>
            <div className="ml-4 col-span-2">
                <div className='flex justify-between items-center'>
                    <h3 className="bg-[#E7EFFC] text-[#1363DF] text-sm lg:text-[16px] mx-auto lg:mx-0 font-semibold rounded-full px-4 py-2 w-fit">{category}</h3>
                    <p className='text-xl text-[#1363DF] font-bold'>${price}</p>
                </div>
                <h3 className="text-2xl text-[#082A5E] font-semibold">{title}</h3>
                <div className="flex justify-start gap-10 py-3">
                    <span className="flex justify-center items-center gap-1 font-normal text-md text-[#082A5E] mr-2"><RxReader></RxReader> {modules} lessons</span>
                    <span className="flex justify-center items-center gap-1 font-normal text-md text-[#082A5E] mr-2"> <RxCounterClockwiseClock></RxCounterClockwiseClock>{duration}</span>
                    <span className='flex items-center gap-1'>
                        {
                            !rating ?
                                <>
                                    <FaStar className='text-[#FFD700]'></FaStar>
                                    <span className='text-[#082A5E]'>(NAN)</span>
                                </>
                                :
                                <>
                                    <FaStar className='text-[#FFD700]'></FaStar>
                                    ({rating})
                                </>
                        }
                    </span>
                </div>
                <p className="text-[#082A5E]">
                    {description}
                </p>

                <div className='flex justify-start items-center gap-10 pt-3'>
                    <p className='font-normal text-md text-[#082A5E] mr-2'><span className='font-semibold'>Available Seats:</span> {available_seats}</p>
                    {
                        enrolled_students === 0 ?
                            <>
                                <p className="flex justify-center items-center gap-1 font-normal text-md text-[#082A5E] mr-2"><LuUsers></LuUsers><span><span className='font-semibold'>Enrolled:</span> None </span></p>
                            </>
                            :
                            <>
                                <p
                                    className="flex justify-center items-center gap-1 font-normal text-md text-[#082A5E] mr-2"
                                >
                                    <LuUsers></LuUsers>
                                    <span>
                                        <span className='font-semibold'>Enrolled:</span> {enrolled_students < 10 ? `0${enrolled_students}` : enrolled_students}
                                    </span>
                                </p>
                            </>
                    }
                </div>
                <hr className='my-5' />
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src={instructor_image} />
                            </div>
                        </div>
                        <p className='font-semibold'>{instructor_name}</p>
                    </div>
                    <div>
                        {isAdmin || isInstructor ? (
                            <button
                                className="bg-[#082A5E] bg-opacity-50 opacity-50 px-4 py-2 rounded-full text-white cursor-not-allowed"
                                disabled={isAdmin && isInstructor}
                            >
                                {available_seats === 0 ? 'Enrollment Closed' : 'Only for Student'}
                            </button>
                        ) : (
                            <button
                                onClick={() => handleCart(course)}
                                className={`${isButtonDisabled || available_seats === 0 ? 'bg-[#082A5E] bg-opacity-50 opacity-50 cursor-not-allowed px-4 py-2 rounded-full text-white' : 'bg-[#082A5E] px-4 py-2 rounded-full text-white'}`}
                                disabled={isButtonDisabled || available_seats === 0}
                            >
                                {available_seats === 0 ? 'Enrollment Closed' : 'Add to Cart'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassContentCard;