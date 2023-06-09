import React from 'react';
import useCart from '../../../Hooks/useCart';
import SelectedClassCard from './SelectedClassCard';

const SelectedClass = () => {
    const [carts] = useCart()
    const total = carts.reduce((sum, item) => item.fee + sum, 0)
    return (
        <div>
            <h2 className='text-3xl font-semibold text-start'>Your Have Selected Total (0{carts.length}) Classes</h2>
            <hr className='my-4' />
            <div className='flex justify-between items-center'>
                <p className='text-xl font-semibold'>Subtotal: ${total}</p>
                <button className='bg-[#082A5E] text-white rounded py-2 px-4 font-semibold transform hover:scale-105 duration-300'>Checkout</button>
            </div>
            <div className='mt-8'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Course Image</th>
                                <th>Course Name</th>
                                <th>Course Fee</th>
                                <th>Modules</th>
                                <th>Course Duration</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map((cart, index) => <SelectedClassCard key={cart._id} cart={cart} index={index}></SelectedClassCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SelectedClass;