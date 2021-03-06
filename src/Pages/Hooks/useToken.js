import React, { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const email = user?.user?.email;
        const userEmail = { email: email }
        if (email) {
            fetch(`https://enigmatic-anchorage-69503.herokuapp.com/users/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userEmail)
            })
                .then(res => res.json())
                .then(data => setToken(data))
        }

        // 
    }, [user])
    return [token];
};

export default useToken;