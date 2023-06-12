import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';

const useManageUsers = () => {
    const { user } = useAuth();
    const { data: users = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['users'],
        enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            return res.json();
        }
    });
    return [users, refetch, loading]
};

export default useManageUsers;