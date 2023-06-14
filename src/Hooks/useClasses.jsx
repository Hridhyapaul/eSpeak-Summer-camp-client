import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: courses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['course'],
        // enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get('/courses');
            return res.data;
        }
    })

    return [courses, loading, refetch]

};

export default useClasses;