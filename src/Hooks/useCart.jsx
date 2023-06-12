import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {refetch, data: carts = []} = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async() => {
            const res = await axiosSecure(`/carts?email=${user?.email}`);
            console.log('res from axios', res)
            return res.data;
        }
    })
    return [carts, refetch]
};

export default useCart;