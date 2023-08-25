import React from 'react';

const SectionTitle2 = ({ headers, subHeader }) => {
    return (
        <div className="mb-20 mx-4 lg:mx-0">
            <h3 className="bg-lightColor text-designColor text-sm lg:text-[16px] mx-auto lg:mx-0 font-semibold rounded-md px-4 py-2 w-fit">{subHeader}</h3>
            <h1 className="text-deepColor text-3xl lg:text-5xl text-center lg:text-left font-bold mt-2">{headers}</h1>
        </div>
    );
};

export default SectionTitle2;