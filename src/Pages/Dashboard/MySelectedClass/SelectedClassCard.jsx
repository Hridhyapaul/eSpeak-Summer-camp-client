
import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import useCart from '../../../Hooks/useCart';

const SelectedClassCard = ({ cart, index }) => {
    const { _id, image, duration, modules, price, title, category } = cart;
    const [, refetch] = useCart();
    const handleCourseDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this course",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://e-speak-server-hridhyapaul.vercel.app/carts/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'This course has been deleted.',
                                'success'
                            )
                        }
                    })
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
                <button onClick={() => handleCourseDelete(_id)} className='bg-[#082A5E] text-white text-[18px] rounded-full py-3 px-3 font-semibold transform hover:scale-105 duration-300'><FaTrashAlt></FaTrashAlt></button>
            </td>
        </tr>
    );
};

export default SelectedClassCard;