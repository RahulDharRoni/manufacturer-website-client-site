import React from 'react';

const useAdmin = () => {
    const [admins, setAdmins] = useAdmins()
    const { email, roll } = showUser;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                // refetch()
                console.log(data)
            })
    }
    return [admins]
    );
};

export default useAdmin;