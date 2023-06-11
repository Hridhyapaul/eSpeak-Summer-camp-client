import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useManageUsers = () => {
    const { data: users = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            return res.json();
        }
    });
    return [users, refetch, loading]
};

export default useManageUsers;