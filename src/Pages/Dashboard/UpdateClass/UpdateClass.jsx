import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const UpdateClass = () => {
    const { user } = useAuth();
    const { _id } = useParams();
    console.log(_id)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse)
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const updateDetails = {
                        title: data.name,
                        image: imgURL,
                        price: parseFloat(data.price),
                        duration: data.duration,
                        available_seats: parseFloat(data.seat),
                        modules: parseFloat(data.modules),
                        instructor_name: data.Instructor,
                        instructor_email: data.email,
                        category: data.category,
                        description: data.description,
                        status: "pending",
                        feedback: "Under review"
                    }
                    console.log(updateDetails)
                    fetch(`https://e-speak-server-ie0i5px7u-hridhyapaul.vercel.app/updateCourse/${_id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(updateDetails)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'You have successfully update your class.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                }
            })
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-10">Update Your Class</h1>
            <div className="w-[600px] bg-white rounded shadow-md p-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-8">
                        <div className='col-span-2'>
                            <label htmlFor="name" className="block mb-1 font-medium">
                                Class Name
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                placeholder='Enter class name'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                            />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="image" className="block mb-1 font-medium">
                                Class Image
                            </label>
                            <input {...register("image", { required: true })} type="file" className="file-input mt-3 file-input-sm w-full max-w-xs" />

                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="password" className="block mb-1 font-medium">
                                Instructor Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    {...register("Instructor", { required: true })}
                                    className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                                    value={user?.displayName}

                                />
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="confirmPassword" className="block mb-1 font-medium">
                                Instructor Email
                            </label>
                            <input
                                type="text"
                                {...register("email", { required: true })}
                                value={user?.email}
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"

                            />
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="photoURL" className="block mb-1 font-medium">
                                Available Seats
                            </label>
                            <input
                                type="number"
                                min="0" step="any"
                                {...register("seat", { required: true })}
                                placeholder='Enter available seats'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"

                            />
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="price" className="block mb-1 font-medium">
                                Price
                            </label>
                            <input
                                {...register("price", { required: true })}
                                type="number" min="0" step="any"
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                            ></input>
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="duration" className="block mb-1 font-medium">
                                Duration
                            </label>
                            <input
                                {...register("duration", { required: true })}
                                type="text" min="0" step="any"
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                            ></input>
                        </div>
                        <div className='col-span-1'>
                            <label htmlFor="modules" className="block mb-1 font-medium">
                                Class Modules
                            </label>
                            <input
                                {...register("modules", { required: true })}
                                type="text" min="0" step="any"
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                            ></input>
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="phoneNumber" className="block mb-1 font-medium">
                                Category
                            </label>
                            <input
                                type="text"
                                {...register("category", { required: true })}
                                placeholder='Enter category'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"

                            />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="address" className="block mb-1 font-medium">
                                Description
                            </label>
                            <textarea
                                {...register("description", { required: true })}
                                placeholder='Enter class description'
                                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-[#082A5E] focus:border-[#082A5E]"
                            ></textarea>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#082A5E] text-white rounded py-2 px-4 font-semibold transform hover:scale-105 duration-300 mt-8 mb-4"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateClass;