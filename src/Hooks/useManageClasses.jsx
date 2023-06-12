import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useManageClasses = () => {
    const { user } = useAuth();
    const { data: courses = [], refetch } = useQuery({
        queryKey: ['course'],
        enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/manageCourses');
            return res.json();
        }
    })
    return [courses, refetch]
};

export default useManageClasses;