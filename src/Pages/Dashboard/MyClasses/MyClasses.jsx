import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyClassesCard from './MyClassesCard';
import useInstructorClasses from '../../../Hooks/useInstructorClasses';

const MyClasses = () => {
    const { user } = useAuth();
    const [courses, refetch] = useInstructorClasses()

    console.log(courses)

    return (
        <div>
            <div className='mt-8'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Course Image</th>
                                <th>Course Name</th>
                                <th>Price</th>
                                <th>Modules</th>
                                <th>Duration</th>
                                <th>Enrolled Students</th>
                                <th>Status</th>
                                <th>Feedback</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courses.map((course, index) => <MyClassesCard key={course._id} course={course} refetch={refetch} index={index}></MyClassesCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClasses;