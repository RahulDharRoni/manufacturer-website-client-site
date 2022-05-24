import React, { useEffect, useState } from 'react';
import AdminUser from './AdminUser';

const MakeAdmin = () => {
    const [showUsers, setShowUsers] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setShowUsers(data))
    }, [])

    return (
        <div>
            <h1>{showUsers?.length}</h1>
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
                            showUsers?.map(showUser => <AdminUser
                                key={showUser._id}
                                showUser={showUser}
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