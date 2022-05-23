import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [order, setOrder] = useState();
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders/myorders?uEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrder(data))
        }
    }
        , [user])
    return (

        <div className='w-full'>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>PayNow</th>
                            <th>Delete Order</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            order?.map(orders => <tr>
                                <th>1</th>
                                <td>{orders?.productName}</td>
                                <td>{orders?.productPrice}</td>
                                <td>{orders?.productQuantity}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders; <h1>Order</h1>