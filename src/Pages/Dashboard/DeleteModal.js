import React from 'react';

const DeleteModal = ({ deleteOrder, setDeleteOrder, refetch, data }) => {
    const { _id } = deleteOrder

    const handleDelete = (_id) => {
        console.log(deleteOrder._id)

        fetch(`https://enigmatic-anchorage-69503.herokuapp.com/order/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Order deleted')
                    setDeleteOrder(null)
                    refetch()
                }
            })
    }
    return (

        <div>
            <input type="checkbox" id="delete-model" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Do you want to Delete the Order??</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className='btn btn-primary'>Delete</button>
                        <label For="delete-model" className="btn">Yay!</label>
                    </div>
                </div>
            </div>


        </div >
    )
};

export default DeleteModal;