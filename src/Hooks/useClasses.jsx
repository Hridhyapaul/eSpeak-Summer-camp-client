import { useQuery } from "@tanstack/react-query";

const useClasses = () => {

    const { data: courses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['course'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/courses');
            return res.json();
        }
    })

    return [courses, loading, refetch]

};

export default useClasses;