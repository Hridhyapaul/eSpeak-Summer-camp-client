import { useQuery } from "@tanstack/react-query";

const useClasses = () => {

    const { data: courses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['course'],
        queryFn: async () => {
            const res = await fetch('courses.json');
            return res.json();
        }
    })

    return [courses, loading, refetch]

};

export default useClasses;