import React from 'react';

const AdminUser = ({ showUser, refetch, index }) => {
    const { email, roll } = showUser;

    const makeAdmin = () => {
        fetch(`https://enigmatic-anchorage-69503.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{roll !== 'admin' && <button onClick={makeAdmin} className='btn btn-primary'>Admin</button>}</td>
            <td><button className='btn btn-primary'>Remove Admin</button></td>
        </tr >
    );
};

export default AdminUser;