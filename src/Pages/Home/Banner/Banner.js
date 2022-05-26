import React from 'react';
import Banners from '../../../Pic/Banners.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="gird grid-col-1 lg:grid-cols-2 hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img src={Banners} className="lg:max-w-lg rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">PC HOUS</h1>
                    <p className="py-6">Welcome to PC HOUSE.Here you will get regular updates on a variety of IT products. Plus, if you have any servicing issue, warranty issue, you can discuss here as well. Our purpose is to serve our customers in every convenient way and we hope this place will prove to be one such platform where our customers can get a good service.It's a complete IT solution provide</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;