import React from 'react';
import useClasses from '../../../Hooks/useClasses';
import ClassContentCard from './ClassContentCard';
import { Helmet } from 'react-helmet-async';

const ClassContent = () => {
    const [courses] = useClasses();
    return (
        <div className='pt-28'>
            <Helmet>
                <title>eSpeak | Classes</title>
            </Helmet>
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