import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ManageClassesCard = ({ course, refetch, index }) => {
    console.log(course)
    const { _id, image, title, price, available_seats, instructor_name, instructor_email, category, feedback, status } = course

    const { register, handleSubmit, reset } = useForm();
    const [showModal, setShowModal] = useState(false);
    const [isApproving, setIsApproving] = useState(false);
    const [isDenied, setIsDenied] = useState(false)
    const [isFeedbackDisable, setIsFeedbackDisable] = useState(true)

    const handleApproval = (id) => {
        console.log(id)
        setIsApproving(true);
        setIsDenied(true)
        fetch(`https://e-speak-server-ie0i5px7u-hridhyapaul.vercel.app/courses/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                }
            })
    };

    const handleDeny = (id) => {
        setIsDenied(true)
        setIsApproving(true)
        setIsFeedbackDisable(false)
        console.log(id)
        fetch(`https://e-speak-server-ie0i5px7u-hridhyapaul.vercel.app/courses/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'Denied' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                }
            })
    }

    const onSubmitFeedback = (data) => {
        console.log(data.feedback);
        fetch(`https://e-speak-server-ie0i5px7u-hridhyapaul.vercel.app/courses/${_id}/feedback`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    refetch(); // Refresh the data after updating the feedback
                }
            })
            .catch(error => {
                console.error('Error updating feedback:', error);
            });
        reset()
        setShowModal(false);
    };

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
            <td>
                <div>
                    <div className="font-bold">{instructor_name}</div>
                    <span className="badge badge-ghost badge-md mt-2">{instructor_email}</span>
                </div>
            </td>
            <td>
                <p className='text-center font-semibold'>{available_seats}</p>
            </td>
            <td><p className='text-right font-semibold'>${price}</p></td>
            <td>

                {status === 'Approved' && (
                    <p className='bg-[#B8F7D4] text-black text-center text-sm rounded-full py-1 px-3 font-semibold'>{status}</p>
                )}
                {status === 'Denied' && (
                    <p className='bg-[#F8B8A2] text-black text-center text-sm rounded-full py-1 px-3 font-semibold'>{status}</p>
                )}
                {status === 'pending' && (
                    <p className='bg-[#FFFF99] text-black text-center text-sm rounded-full py-1 px-3 font-semibold'>{status}</p>
                )}

            </td>
            <td>
                <button
                    onClick={() => handleApproval(_id)}
                    disabled={isApproving}
                    className={`${isApproving ? 'bg-[#B8F7D4] bg-opacity-50 opacity-50 cursor-not-allowed py-1 px-3 rounded-full font-bold mt-2' : 'bg-[#B8F7D4] py-1 px-3 rounded-full font-bold mt-2 transform hover:scale-105 duration-300'} `}
                >
                    Approve
                </button>
                <button
                    onClick={() => handleDeny(_id)}
                    disabled={isDenied}
                    className={`${isDenied ? 'bg-[#F8B8A2] bg-opacity-50 opacity-50 cursor-not-allowed py-1 px-3 rounded-full font-bold mt-2' : 'bg-[#F8B8A2] py-1 px-3 rounded-full font-bold mt-2 transform hover:scale-105 duration-300'} `}
                >
                    Deny
                </button>
            </td>
            <td>
                <button disabled={isFeedbackDisable} onClick={() => setShowModal(true)} className={` ${isFeedbackDisable? 'bg-base-300 bg-opacity-50 opacity-50 cursor-not-allowed': 'bg-base-300 transform hover:scale-105 duration-300'} text-center py-1 px-4 rounded-full font-bold mt-2`}>Send Feedback</button>
            </td>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute bg-gray-900 bg-opacity-50 inset-0"></div>
                    <div className="relative bg-white w-[500px]  rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Send Feedback</h2>
                        <form onSubmit={handleSubmit(onSubmitFeedback)}>
                            <div className="mb-4">
                                <label htmlFor="feedback" className="block font-semibold mb-2">
                                    Feedback
                                </label>
                                <input
                                    {...register('feedback', { required: true })}
                                    id="feedback"
                                    type="text"
                                    className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                                    placeholder='Feedback here'
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-0 right-0 mt-4 mr-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </tr>
    );
};

export default ManageClassesCard;