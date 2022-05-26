import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import AdminUser from './AdminUser';

const MakeAdmin = () => {

    const { isLoading, refetch, data } = useQuery('data', () =>
        fetch('https://enigmatic-anchorage-69503.herokuapp.com/users').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                                index
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