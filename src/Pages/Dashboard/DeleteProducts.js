import React, { useEffect, useState } from 'react';
import ManageAllOrder from './ManageAllOrder';

const DeleteProducts = () => {
    const [allOrder, setAllOrder] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllOrder(data)
            })
    }, [])

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

                        {/* {
                            allOrder.map(orders => <tr>
                                <th>1</th>
                                <td>{orders?.uName}</td>
                                <td>{orders?.productName}</td>
                                <td>{orders?.productPrice}</td>
                                <td>{orders?.productQuantity}</td>
                                <td>


                                </td>
                                <td>
                                </td>
                            </tr>)
                        } */}
                        {/* {deleteOrder && <DeleteModal
                            data={data}
                            deleteOrder={deleteOrder}
                            setDeleteOrder={setDeleteOrder}
                            refetch={refetch}
                        >
                        </DeleteModal>} */}


                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default DeleteProducts;