import React from 'react';
import { RxCounterClockwiseClock, RxReader } from "react-icons/rx";
import { LuUsers } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

const ClassContentCard = ({ course }) => {
    console.log(course)
    const { category, duration, description, fee, image, modules, instructor, rating, enrolled, title } = course
    return (
        <div className="grid grid-cols-3 gap-3 p-4 bg-white rounded-lg shadow my-6">
            <div className="col-span-1">
                <img className="w-full h-[275px] rounded-md object-cover" src={image} alt="Instructor" />
            </div>
            <div className="ml-4 col-span-2">
                <h3 className="bg-[#E7EFFC] text-[#1363DF] text-sm lg:text-[16px] mx-auto lg:mx-0 font-semibold rounded-full px-4 py-2 w-fit">{category}</h3>
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
                    <p className='text-xl text-[#1363DF] font-bold'>${fee}</p>
                </div>
            </div>
        </div>
    );
};

export default ClassContentCard;