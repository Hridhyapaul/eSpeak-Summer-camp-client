import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useManageClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: courses = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['courses'],
        // enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get('/manageCourses');
            console.log(res)
            return res.data;
        }
    })
    return [courses, refetch, loading]
};

export default useManageClasses;