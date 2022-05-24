import React from 'react';

const DeleteModal = ({ deleteOrder, setDeleteOrder, refetch, data }) => {
    const { _id } = deleteOrder

    const handleDelete = (_id) => {
        console.log(deleteOrder._id)

        fetch(`http://localhost:5000/orders/${_id}`, {
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
            <input type="checkbox" id="delete-model" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Do you want to Delete the Order??</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} className='btn btn-primary'>Delete</button>
                        <label for="delete-model" class="btn">Yay!</label>
                    </div>
                </div>
            </div>


        </div >
    )
};

export default DeleteModal;