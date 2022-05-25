import React from 'react';

const ManageOrder = ({ order }) => {
    const { productName, productQuantity, paid, transactionID } = order
    return (

        <div>
            <tr>
                <th>1</th>
                <td>{productName}</td>
                <td>{productQuantity}</td>
                <td>{paid}</td>
                <td>{transactionID}</td>
            </tr>
        </div>

    );
};

export default ManageOrder;