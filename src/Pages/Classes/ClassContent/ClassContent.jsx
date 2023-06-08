import React from 'react';

const ClassContent = () => {
    return (
        <div className='pt-28'>
            <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-1'>
                    <h1>This is SideBar</h1>
                </div>
                <div className='col-span-3'>
                    <div className="grid grid-cols-3 gap-3 p-4 bg-white rounded-lg shadow">
                        <div className="col-span-1">
                            <img className="w-16 h-16 rounded-full" src="image-url.jpg" alt="Instructor" />
                        </div>
                        <div className="ml-4 col-span-2">
                            <h3 className="text-lg font-semibold">Instructor Name</h3>
                            <p className="text-gray-500">Expert in Field</p>
                            <p className="text-gray-700 mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque ut justo
                                tristique aliquet. Ut rutrum felis sit amet libero malesuada, et pretium quam
                                interdum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassContent;