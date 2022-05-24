import React from 'react';

const AdminUser = ({ showUser }) => {
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
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{roll !== 'admin-user' && <button onClick={makeAdmin} className='btn btn-primary'>Admin</button>}</td>
            <td><button className='btn btn-primary'>Remove Admin</button></td>
        </tr >
    );
};

export default AdminUser;