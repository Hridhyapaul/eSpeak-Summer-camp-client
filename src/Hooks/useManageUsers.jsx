import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useManageUsers = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['users'],
        // enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });
    return [users, refetch, loading]
};

export default useManageUsers;