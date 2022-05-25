import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import DeleteModal from './DeleteModal';

const MyOrders = () => {
    // const [showAllOrder] = useOrders([])
    // const [order, setOrder] = useState();
    const [user, loading] = useAuthState(auth)
    const [deleteOrder, setDeleteOrder] = useState(null)
    // const [order, setOrder] = useState()

    // useEffect(() => {
    //     fetch(`http://localhost:5000/orders/myorders?email=${user.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setOrder(data)
    //         })
    // }, [])

    console.log(user.email)
    const { data, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/orders/myorders?email=${user.email}`).then(res => res.json()))




    // const { data, refetch } = useQuery('order', () =>
    //     fetch(`http://localhost:5000/orders/myorders?uEmail=${user.email}`, {
    //         method: "GET",
    //     }).then(res =>
    //         res.json()
    //     )
    // )


    if (loading) {
        return <Loading></Loading>
    }

    return (

        <div className='w-full'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>PayNow</th>
                            <th>Delete Order</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            data?.map(orders => <tr>
                                <th>1</th>
                                <td>{orders?.uName}</td>
                                <td>{orders?.productName}</td>
                                <td>{orders?.productPrice}</td>
                                <td>{orders?.productQuantity}</td>
                                <td>
                                    {/* <button onClick={() => setDeleteOrder(order)} className='btn btn-sm btn-primary'>Delete</button> */}
                                    <label onClick={() => setDeleteOrder(orders)} for="delete-model" class="btn modal-button">Delete</label>
                                </td>
                                <td>{(orders?.productPrice && !orders.paid) && <Link to={`/dashboard/payment/${orders?._id}`}>
                                    <button className='btn btn-sm btn-primary'>Pay</button></Link>}

                                    {(orders.productPrice) && <span>Payed</span>}
                                </td>
                            </tr>)
                        }
                        {deleteOrder && <DeleteModal
                            data={data}
                            deleteOrder={deleteOrder}
                            setDeleteOrder={setDeleteOrder}
                            refetch={refetch}
                        >
                        </DeleteModal>}


                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;