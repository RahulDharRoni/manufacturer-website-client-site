import React from 'react';
import useOrders from '../Hooks/useOrders';
import useCommonTools from '../Tools/useCommonTools';


const ManageProducts = () => {
    const [tools, setTools] = useCommonTools()
    return (
        <div className='w-full'>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Image</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            tools?.map(
                                (tool, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td>{tool?.name}</td>
                                    <td>{tool?.quantity}</td>
                                    <td>{tool?.productPrice}</td>
                                    <td>{tool?.price}</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts; 