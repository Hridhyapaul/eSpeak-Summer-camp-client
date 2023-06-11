import React from 'react';
import useManageUsers from '../../../Hooks/useManageUsers';
import ManageUserCard from './ManageUserCard';

const ManageUser = () => {
    const [users, refetch] = useManageUsers();
    console.log(users)
    return (
        <div>
            <div className='mt-8'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='text-[14px]'>
                            <tr>
                                <th></th>
                                <th>User Image</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>User Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <ManageUserCard key={user._id} user={user} refetch={refetch} index={index}></ManageUserCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;