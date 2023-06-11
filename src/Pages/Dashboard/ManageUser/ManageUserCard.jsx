import React from 'react';
import { useState } from 'react';

const ManageUserCard = ({ user, index, refetch }) => {
    const {_id, name, photo, email, role } = user;
    const [isMadeAdmin, setIsMadeAdmin] = useState(false);
    const [isMadeInstructor, setIsMadeInstructor] = useState(false)

    const handleMakeAdmin = (id) => {
        console.log(id)
        setIsMadeAdmin(true);
        setIsMadeInstructor(true)
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ role: 'Admin' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                }
            })
    };

    const handleMakeInstructor = (id) => {
        setIsMadeInstructor(true)
        setIsMadeAdmin(true)
        console.log(id)
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ role: 'Instructor' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                }
            })
    }

    return (
        <tr>
            <th>
                <p>{index + 1}</p>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{email}</div>
                </div>
            </td>
            <td>
                {role === 'Admin' && (
                    <p className='bg-[#9A9CE9] text-black text-center text-sm rounded-full py-1 px-3 font-semibold'>{role}</p>
                )}
                {role === 'Instructor' && (
                    <p className='bg-[#A2B9ED] text-black text-center text-sm rounded-full py-1 px-3 font-semibold'>{role}</p>
                )}
                {!role && (
                    <p className='bg-[#A3DCEF] text-black text-center text-sm rounded-full py-1 px-3 font-semibold'>Student</p>
                )}
            </td>

            <td className='space-x-3 text-center'>
                <button
                    onClick={() => handleMakeAdmin(_id)}
                    disabled={isMadeAdmin}
                    className={`${isMadeAdmin ? 'bg-[#9A9CE9] bg-opacity-50 opacity-50 cursor-not-allowed py-1 px-3 rounded-full font-bold mt-2' : 'bg-[#9A9CE9] py-1 px-3 rounded-full font-bold mt-2 transform hover:scale-105 duration-300'} `}
                >
                    Make Admin
                </button>
                <button
                    onClick={() => handleMakeInstructor(_id)}
                    disabled={isMadeInstructor}
                    className={`${isMadeInstructor ? 'bg-[#A2B9ED] bg-opacity-50 opacity-50 cursor-not-allowed py-1 px-3 rounded-full font-bold mt-2' : 'bg-[#A2B9ED] py-1 px-3 rounded-full font-bold mt-2 transform hover:scale-105 duration-300'} `}
                >
                    Make Instructor
                </button>
            </td>
        </tr>
    );
};

export default ManageUserCard;