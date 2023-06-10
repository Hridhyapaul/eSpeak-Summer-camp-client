import React from 'react';
import { TfiPencilAlt } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const MyClassesCard = ({ course, refetch, index }) => {
    const {_id, title, category, feedback, status, price, modules, image, duration, available_seats } = course;

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
            <td>
                <p className='text-center'>{available_seats}</p>
            </td>
            <td>
                <p className='bg-[#FFFF99] text-black text-sm rounded-full py-1 px-3 font-semibold'>{status}</p>
            </td>
            <td>
                <p>{feedback}</p>
            </td>
            <td>
                <Link to={`/dashboard/updateClass/${_id}`}><button><TfiPencilAlt className='text-xl'></TfiPencilAlt></button></Link>
            </td>
        </tr>
    );
};

export default MyClassesCard;