import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useInstructorClasses = () => {
    const { user } = useAuth();
    const { refetch, data: courses = [] } = useQuery({
        queryKey: ['instructorCourse', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/instructorCourse?email=${user?.email}`);
            return res.json();
        }
    })
    return [courses, refetch]
};

export default useInstructorClasses;