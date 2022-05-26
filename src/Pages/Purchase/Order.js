import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Order = ({ buy, quan }) => {
    const { _id, name, price, quantity } = buy
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()

    if (loading) {
        return <Loading></Loading>
    }

    const handleOrder = (event) => {
        event.preventDefault()
        // const fname = event.target.uName.value;
        const number = event.target.number.value;
        const address = event.target.address.value;
        const newQuantity = parseInt(quan.orderQuandity) + parseInt(quantity)
        console.log(newQuantity)
        const orders = {
            orderId: _id,
            uName: user.displayName,
            email: user.email,
            productName: name,
            productPrice: price,
            productQuantity: newQuantity,
            phonNumber: number,
            Address: address
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orders)
        })
            .then(req => req.json())
            .then(data => {
                console.log(data)
                toast("Congratulation !Order Successful! ")
                navigate('/')
            })
        console.log(orders)

        // toHaveStyle("Congratulation !Order Successful! ")
    }
    const newQuantity = parseInt(quan.orderQuandity) + parseInt(quantity)
    console.log(newQuantity)
    return (

        <div class="card-actions">
            <h1 className='font-bold text-center'>Check Out Form </h1>
            <form onSubmit={handleOrder} className='w-full'>
                <input type="text" name='uName' disabled value={user?.displayName || ""} class="input input-bordered w-full max-w-xs mt-3" />
                <input type="email" name='uEmail' disabled value={user?.email || ""} class="input input-bordered w-full max-w-xs mt-3" />
                <input type="number" name="number" placeholder="Phone Number" class="input input-bordered w-full max-w-xs mt-3" required />

                <input type="text" name="address" placeholder="Address" class="input input-bordered w-full max-w-xs mt-3" required />
                <div class="flex flex-col w-full border-opacity-50">
                    <div class="divider">Product Information</div>
                </div>
                <input type="text" disabled name='Pname' value={name} class="input input-bordered input-gray-200 w-full max-w-xs mt-3" />
                <input type="text" disabled value={`Price :${price}`} class="input input-bordered input-gray-200 w-full max-w-xs mt-3" />
                <input type="text" disabled value={`Quantity : ${newQuantity}`} class="input input-bordered input-gray-200 w-full max-w-xs mt-3" />
                {/* <input type="text" disabled value={`Quantity You Ordering : ${quan.orderQuandity}`} class="input input-bordered input-gray-200 w-full max-w-xs mt-3 " /> */}
                <button class="btn btn-outline mt-3">Place An Order</button>

            </form>
        </div>

    );
};

export default Order;