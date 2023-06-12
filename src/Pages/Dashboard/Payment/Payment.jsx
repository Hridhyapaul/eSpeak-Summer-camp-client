import React from 'react';
import useCart from '../../../Hooks/useCart';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
    const [carts] = useCart();
    const total = carts.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h1 className='text-2xl font-bold mb-4 text-center'>You have to pay total ${price}</h1>
            <hr />
            <Elements stripe={stripePromise}>
            <PaymentForm price={price} carts={carts}></PaymentForm>
            </Elements>
        </div>
    );
};

export default Payment;