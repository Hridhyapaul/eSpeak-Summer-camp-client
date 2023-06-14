import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructorPage = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['instructors'],
        // enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get('/users/instructors');
            console.log(res)
            return res.data;
        }
    })
    return [instructors, refetch, loading]
};

export default useInstructorPage;