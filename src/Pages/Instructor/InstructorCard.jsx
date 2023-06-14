import React from 'react';

const InstructorCard = ({ instructor }) => {
    const { name, email, photo, coursesCount, courses } = instructor;
    return (
        <div className='col-span-1'>
            <div className="flex bg-white rounded-lg shadow-md">
                <div className="w-1/3">
                    <img
                        src={photo}
                        alt="Card Image"
                        className="object-cover h-[300px] rounded-l-lg"
                    />
                </div>
                <div className="w-2/3 p-4">
                    <h2 className="text-2xl text-[#082A5E] font-bold mb-2">{name}</h2>
                    <p className="text-[#082A5E] font-semibold">{email}</p>
                    <hr className='my-3' />
                    <div className='space-y-2'>
                        <p
                            className="text-[#082A5E] font-semibold">
                            <span>Total Courses: </span>
                            {coursesCount < 10 ? `0${coursesCount}` : coursesCount}
                        </p>
                        <p className="text-[#082A5E]"> <span className='font-semibold'>Course Name:</span>
                            <ul >
                                <hr className='my-1' />
                                {
                                    courses.map((course, index) => <li key={index}><span>{index + 1}. </span>{course}</li>)
                                }
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;