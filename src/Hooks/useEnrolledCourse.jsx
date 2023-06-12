import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useEnrolledCourse = () => {

    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {refetch, data: enrolledCourses = []} = useQuery({
        queryKey: ['enrolledCourse', user?.email],
        enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async() => {
            const res = await axiosSecure(`/enrolledCourse?email=${user?.email}`);
            console.log('res from axios', res)
            return res.data;
        }
    })
    return [enrolledCourses, refetch]
};

export default useEnrolledCourse;