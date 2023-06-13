import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useInstructorClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: courses = [] } = useQuery({
        queryKey: ['instructorCourse', user?.email],
        // enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructorCourse?email=${user?.email}`);
            return res.data;
        }
    })
    return [courses, refetch]
};

export default useInstructorClasses;