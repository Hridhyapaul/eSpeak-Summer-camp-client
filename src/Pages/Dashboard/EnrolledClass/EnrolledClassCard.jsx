import React from 'react';

const EnrolledClassCard = ({ course, index }) => {
    const { image, duration, modules, price, title, category } = course;

    return (
        <tr>
            <th>
                <p>{index + 1}</p>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{title}</div>
                    <span className="badge badge-ghost badge-sm">{category}</span>
                </div>
            </td>
            <td><p className='text-right'>${price}</p></td>
            <td>
                <p className='text-center'>{modules} modules</p>
            </td>
            <td>
                <p className='text-center'>{duration}</p>
            </td>
        </tr>
    );
};

export default EnrolledClassCard;