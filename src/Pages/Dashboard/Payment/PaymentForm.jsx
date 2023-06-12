import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const PaymentForm = ({ price, carts }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState('')
    const [paymentSuccess, setPaymentSuccess] = useState('')
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transitionId, setTransitionId] = useState('')

    useEffect(() => {
        if (price == 0) return
        axiosSecure.post('/create-payment-intent', { price })
            .then(data => {
                console.log(data.data.clientSecret)
                setClientSecret(data.data.clientSecret)
            })
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        console.log(card)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        if (error) {
            console.log('[error]', error);
            setPaymentError(error.message)
        } else {
            setPaymentError('')
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'unknown'
                },
            },
        });

        if (confirmError) {
            console.log(confirmError)
        }
        console.log('payment intent', paymentIntent);

        setProcessing(false)


        if (paymentIntent.status === 'succeeded') {
            setTransitionId(paymentIntent.id)
            setPaymentSuccess(`Your payment of ${price} has been successfully processed.`)

            const payments = {
                email: user?.email,
                transitionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: carts.length,
                cartItems_id: carts.map(item => item._id),
                course_name: carts.map(item => item.title),
                course_id: carts.map(item => item.courseId),
                status: 'service pending',
            }

            axiosSecure.post('/payments', payments)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Congratulations! Your payment has been approved.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    }


    return (
        <div className='w-[400px]'>
            <form onSubmit={handleSubmit} className="mt-6">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret || processing} className="bg-[#082A5E] text-white text-[16px] rounded-lg py-1 px-3 mt-6 font-semibold transform hover:scale-105 duration-300">
                    PAY
                </button>
            </form>
            {paymentError ? <p className="text-red-500 mt-4">
                {paymentError}
            </p> : <p className="text-green-500 mt-4">
                {paymentSuccess}
            </p>}
        </div>
    );
};

export default PaymentForm;