import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const Payment = () => {
    let { id } = useParams();

    const { isLoading, data: order } = useQuery(['orders', id], () =>
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }

        }).then(res =>
            res.json()

        ))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="hero min-h-screen bg-base-200">
            <h1>{id}</h1>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card w-50 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Pay Now For {order?.productName}</h2>
                        <p>Quantity : {order?.productQuantity}</p>
                        <p>Quantity : {order?.productQuantity}</p>

                        <p>Quantity : {order?.productPrice}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-50 max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;