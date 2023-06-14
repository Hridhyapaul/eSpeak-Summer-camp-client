import React from 'react';
import useInstructorPage from '../../Hooks/useInstructorPage';
import InstructorCard from './InstructorCard';
import { Helmet } from 'react-helmet-async';

const Instructor = () => {
    const [instructors] = useInstructorPage();
    console.log(instructors)
    return (
        <div className='pt-28 '>
            <Helmet>
                <title>eSpeak | Instructors</title>
            </Helmet>
            <h1 className='text-5xl font-bold text-[#082A5E] text-center'>Discover Our Expert Instructors</h1>
            <div className='grid grid-cols-2 gap-10 mt-14'>
                {
                    instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructor;