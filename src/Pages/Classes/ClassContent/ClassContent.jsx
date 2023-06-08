import React from 'react';
import useClasses from '../../../Hooks/useClasses';
import ClassContentCard from './ClassContentCard';

const ClassContent = () => {
    const [courses] = useClasses();
    return (
        <div className='pt-28'>
            <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-1'>
                    <h1>This is SideBar</h1>
                </div>
                <div className='col-span-3'>
                    {
                        courses.map((course, index) => <ClassContentCard key={index} course={course}></ClassContentCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ClassContent;