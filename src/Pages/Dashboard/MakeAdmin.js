import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import AdminUser from './AdminUser';

const MakeAdmin = () => {
    // const [showUsers, setShowUsers] = useState()

    const { isLoading, refetch, data } = useQuery('data', () =>
        fetch('http://localhost:5000/users').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(showUser => <AdminUser
                                key={showUser._id}
                                showUser={showUser}
                                refetch={refetch}
                            >
                            </AdminUser>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;