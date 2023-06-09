import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const {user} = useAuth();

    const {refetch, data: carts = []} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
            return res.json();
        }
    })
    return [carts, refetch]
};

export default useCart;