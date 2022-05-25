import React, { useEffect, useState } from 'react';
import useOrders from '../Hooks/useOrders';
// import ManageAllOrder from './ManageAllOrder';
// import ManageOrder from './ManageOrder';

const ManageOrders = () => {
    const [showAllOrder] = useOrders()

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
                            <th>Payment</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            showAllOrder?.map(
                                (orders, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td>{orders?.uName}</td>
                                    <td>{orders?.productName}</td>
                                    <td>{orders?.productPrice}</td>
                                    <td>{orders?.productQuantity}</td>
                                    <td>{(orders?.paid === true) ? <button className='btn btn-sm btn-primary'>Payed</button> : <h5 className='text-red-500 font-semibold'>Unpaid</h5>}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;