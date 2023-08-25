import React from 'react';
import useClasses from '../../../Hooks/useClasses';
import ClassContentCard from './ClassContentCard';
import { Helmet } from 'react-helmet-async';
import Container from '../../Home/Shared/Container';

const ClassContent = () => {
    const [courses] = useClasses();
    return (
        <div className='font-body'>
            <Container>
                <div className='pt-28 pb-20'>
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
            </Container>
        </div>
    );
};

export default ClassContent;