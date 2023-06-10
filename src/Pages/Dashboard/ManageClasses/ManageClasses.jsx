import React from 'react';
import useManageClasses from '../../../Hooks/useManageClasses';
import ManageClassesCard from './ManageClassesCard';

const ManageClasses = () => {
    const [courses, refetch] = useManageClasses();
    console.log(courses)
    return (
        <div>
            <div className='mt-8'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='text-[14px]'>
                            <tr>
                                <th></th>
                                <th>Course Image</th>
                                <th>Course Name</th>
                                <th>Instructor Name & Email</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courses.map((course, index) => <ManageClassesCard key={course._id} course={course} refetch={refetch} index={index}></ManageClassesCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClasses;