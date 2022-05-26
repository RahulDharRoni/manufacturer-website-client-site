import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3EbsLmswAP1ygTsrosVXr9QAjpX3tnK0jwHywhg2ieKlz1WTqeSk4sUnRQSnyfUegaNFH10AHEjcktNfb9rde500hcXBf3iF');


const Payment = () => {
    let { id } = useParams();

    const { isLoading, data: order } = useQuery(['orders', id], () =>
        fetch(`https://enigmatic-anchorage-69503.herokuapp.com/order/${id}`, {
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
        <div className="hero min-h-screen bg-base-200">
            <h1>{id}</h1>
            <div className=" flex-col lg:flex-row-reverse">
                <div className="card w-50 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Pay Now For {order?.productName}</h2>
                        <p>Quantity : {order?.productQuantity}</p>
                        <p>Quantity : {order?.productQuantity}</p>

                        <p>Price : {order?.productPrice}</p>
                    </div>
                </div>
                <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;