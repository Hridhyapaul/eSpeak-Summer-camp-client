import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useEnrolledCourse from '../../../Hooks/useEnrolledCourse';
import { Link } from 'react-router-dom';
import EnrolledClassCard from './EnrolledClassCard';

const EnrolledClass = () => {
    const [enrolledCourses] = useEnrolledCourse();
    console.log(enrolledCourses)
    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>You have joined (0{enrolledCourses.length}) Classes</h2>
            <hr className='my-4' />
            <div className='mt-8'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Course Image</th>
                                <th>Course Name</th>
                                <th>Course Fee</th>
                                <th>Modules</th>
                                <th>Course Duration</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enrolledCourses.map((course, index) => <EnrolledClassCard key={course._id} course={course} index={index}></EnrolledClassCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClass;