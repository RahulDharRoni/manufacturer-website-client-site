import React, { useEffect, useState } from 'react';
import useOrders from '../Hooks/useOrders';
import MyOrders from './MyOrders';

const ManageAllOrder = () => {
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
                            <th>Delete Order</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            showAllOrder?.map(
                                orders => <tr>
                                    <th>1</th>
                                    <td>{orders?.uName}</td>
                                    <td>{orders?.productName}</td>
                                    <td>{orders?.productPrice}</td>
                                    <td>{orders?.productQuantity}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrder; 