import React from 'react';

const PaymentHistoryCard = ({ history, index }) => {
    const { email, transitionId, price, date, quantity } = history;
    // date convert to local time...
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const localDate = new Date(date).toLocaleString('en-US', options);

    return (
        <tr>
            <th>
                <p>{index + 1}</p>
            </th>
            <td>
                <div>
                    <div className="font-bold">{email}</div>
                </div>
            </td>
            <td><p className='text-right'>${price}</p></td>
            <td>
                <p className='text-center'>{transitionId}</p>
            </td>
            <td>
                <p className='text-center'>{quantity} items</p>
            </td>
            <td>
                <p className='text-center'>{localDate}</p>
            </td>
        </tr>
    );
};

export default PaymentHistoryCard;