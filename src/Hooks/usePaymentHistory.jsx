import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePaymentHistory = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: paymentHistory = [] } = useQuery({
        queryKey: ['enrolledCourse', user?.email],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`);
            return res.data;
        }
    })
    return [paymentHistory, refetch]
};

export default usePaymentHistory;