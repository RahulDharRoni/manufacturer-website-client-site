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
    console.log(quan.newQuantityDisplay)
    const handleOrder = (event) => {
        event.preventDefault()
        // const fname = event.target.uName.value;
        const number = event.target.number.value;
        const address = event.target.address.value;
        const newQuantity = parseInt(quan.newQuantityDisplay)
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
        fetch('https://enigmatic-anchorage-69503.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.Reactstringify(orders)
        })
            .then(req => req.json())
            .then(data => {
                console.log(data)
                toast("Congratulation !Order Successful! ")
                navigate('/')
            })
        console.log(orders)


    }
    return (

        <div className="card-actions">
            <h1 className='font-bold text-center'>Check Out Form </h1>
            <form onSubmit={handleOrder} className='w-full'>
                <input type="text" name='uName' disabled value={user?.displayName || ""} className="input input-bordered w-full max-w-xs mt-3" />
                <input type="email" name='uEmail' disabled value={user?.email || ""} className="input input-bordered w-full max-w-xs mt-3" />
                <input type="number" name="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs mt-3" required />

                <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs mt-3" required />
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">Product Information</div>
                </div>
                <input type="text" disabled name='Pname' value={name} className="input input-bordered input-gray-200 w-full max-w-xs mt-3" />
                <input type="text" disabled value={`Price :${price}`} className="input input-bordered input-gray-200 w-full max-w-xs mt-3" />
                <input type="text" disabled value={`Quantity : ${quan.newQuantityDisplay}`} className="input input-bordered input-gray-200 w-full max-w-xs mt-3" />
                <button className="btn btn-outline mt-3">Place An Order</button>

            </form>
        </div>

    );
};

export default Order;