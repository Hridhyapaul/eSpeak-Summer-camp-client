import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useClasses = () => {
    const {user} = useAuth();

    const { data: courses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['course'],
        enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/courses');
            return res.json();
        }
    })

    return [courses, loading, refetch]

};

export default useClasses;