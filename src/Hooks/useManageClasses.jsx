import { useQuery } from '@tanstack/react-query';

const useManageClasses = () => {
    const { data: courses = [], refetch } = useQuery({
        queryKey: ['course'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/manageCourses');
            return res.json();
        }
    })
    return [courses, refetch]
};

export default useManageClasses;