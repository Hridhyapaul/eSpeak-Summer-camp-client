import React, { useState } from 'react';
import useClasses from '../../../Hooks/useClasses';
import ClassContentCard from './ClassContentCard';
import { Helmet } from 'react-helmet-async';
import Container from '../../Home/Shared/Container';
import Select from 'react-select';

const ClassContent = () => {
    const [courses] = useClasses();
    console.log(courses)

    // <----- Search category ----->
    const [value, setValue] = useState(null)
    const uniqueCategoriesSet = new Set();
    // Add unique categories to the Set
    courses.forEach(course => {
        uniqueCategoriesSet.add(course.category);
    });

    const allCategory = Array.from(uniqueCategoriesSet).map(category => {
        return {
            value: category.toUpperCase(), label: category
        };
    })

    // <----- Search Course Name ----->

    const [courseName, setcourseName] = useState(null)

    const allCourseName = courses.map(course => {
        return {
            value: course.title.toUpperCase(), label: course.title
        };
    })

    // <----- Search Course Name ----->

    const [instructorName, setinstructorName] = useState(null)

    const uniqueInstructorsSet = new Set();
    // Add unique categories to the Set
    courses.forEach(course => {
        uniqueInstructorsSet.add(course.instructor_name);
    });

    const allinstructorName = Array.from(uniqueInstructorsSet).map(instructor_name => {
        return {
            value: instructor_name.toUpperCase(), label: instructor_name
        };
    })

    console.log(allinstructorName)

    return (
        <div className='font-body'>
            <Container>
                <div className='pt-28 pb-20'>
                    <Helmet>
                        <title>eSpeak | Classes</title>
                    </Helmet>
                    <div className='text-5xl font-bold text-[#082A5E] text-center mb-12'>
                        <p>Learn a New Language with Us</p>
                    </div>
                    <div className='grid grid-cols-4 gap-8'>
                        <div className='col-span-1 bg-white rounded-lg shadow-lg py-4 px-6 mb-8'>
                            <div className='space-y-8'>
                                <div>
                                    <h1 className='text-xl font-semibold mb-2'>Filter Language</h1>
                                    <Select
                                        options={allCategory}
                                        defaultValue={value}
                                        placeholder="Choose your language"
                                        onChange={setValue}
                                        isClearable
                                        isSearchable
                                        noOptionsMessage={() => "No matching languages found"}
                                    >
                                    </Select>
                                </div>
                                <hr className='mb-4' />
                                <div>
                                    <h1 className='text-xl font-semibold mb-2'>Filter Course Name</h1>
                                    <Select
                                        options={allCourseName}
                                        defaultValue={courseName}
                                        placeholder="Choose your course"
                                        onChange={setcourseName}
                                        isClearable
                                        isSearchable
                                        noOptionsMessage={() => "No matching course found"}
                                    >
                                    </Select>
                                </div>
                                <hr className='mb-4' />
                                <div>
                                    <h1 className='text-xl font-semibold mb-2'>Filter Instructor Name</h1>
                                    <Select
                                        options={allinstructorName}
                                        defaultValue={instructorName}
                                        placeholder="Choose Instructor"
                                        onChange={setinstructorName}
                                        isClearable
                                        isSearchable
                                        noOptionsMessage={() => "No Instructor Found"}
                                    >
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            {
                                courses
                                    .filter(course => value === null || course.category === value.label)
                                    .filter(course => courseName === null || course.title === courseName.label)
                                    .filter(course => instructorName === null || course.instructor_name === instructorName.label)
                                    .map((course, index) => <ClassContentCard key={index} course={course}></ClassContentCard>)
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ClassContent;