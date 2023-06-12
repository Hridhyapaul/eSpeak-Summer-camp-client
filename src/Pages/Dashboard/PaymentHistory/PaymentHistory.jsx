import React from 'react';
import usePaymentHistory from '../../../Hooks/usePaymentHistory';
import PaymentHistoryCard from './PaymentHistoryCard';

const PaymentHistory = () => {
    const [paymentHistory] = usePaymentHistory();
    console.log(paymentHistory)
    return (
        <div>
            <h2 className='text-3xl font-semibold text-center'>Your payment history</h2>
            <hr className='my-4' />
            <div className='mt-8'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-center'>
                                <th></th>
                                <th>Your Email</th>
                                <th>Paid Amount</th>
                                <th>Transition Id</th>
                                <th>Quantity</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentHistory.map((history, index) => <PaymentHistoryCard key={history._id} history={history} index={index}></PaymentHistoryCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;