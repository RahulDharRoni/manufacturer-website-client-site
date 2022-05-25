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


    console.log(user.email)
    const { data, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/orders/myorders?email=${user.email}`).then(res => res.json()))


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
                            <th>Pending</th>
                            <th>PayNow</th>
                            <th>Delete Order</th>

                        </tr>
                    </thead>
                    <tbody className='text-sm'>

                        {
                            data?.map((orders, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{orders?.uName}</td>
                                <td>{orders?.productName}</td>
                                <td>{orders?.productPrice}</td>
                                <td>{orders?.productQuantity}</td>
                                <td>{(!orders.paid) ? <span className='text-red-500'>Pending</span> : <span className='text-gray-600'>Order Successful</span>}
                                </td>
                                <td>
                                    <label onClick={() => setDeleteOrder(orders)} for="delete-model" class="btn modal-button">Delete</label>
                                </td>
                                <td>{(orders?.productPrice && !orders.paid) && <Link to={`/dashboard/payment/${orders?._id}`}>
                                    <button className='btn btn-sm btn-primary'>Pay</button></Link>}

                                    {(orders?.productPrice && orders.paid) &&
                                        < div >
                                            < span className='text-primary font-bold'>Payment Successful!pending to shipment</span>
                                            <p className='font-sm'>Transaction If:<span className='font-bold text-blue-400'> {orders?.transactionID}</span></p>
                                        </div>

                                    }
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