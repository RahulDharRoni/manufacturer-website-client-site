import React from 'react';

const Count = () => {
    return (
        <div className='lg:my-10 lg:py-20 bg-gradient-to-r from-gray-100 to-pink-100 uppercase'>
            <div>
                <h1 className='font-black lg:text-5xl uppercase text-red-500 text-center'>Our Business Portfolio / Business Summary</h1>
                <h5 className='text-center'>JOIN WITH US! NOW</h5>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-4 gap-1  my-20'>
                <div className="card w-64 bg-transparent  shadow-xl image-full text-dark outline outline-offset-2 outline-blue-500 border-2 border-cyan-800 m-10">
                    <div className="card-body">
                        <p className='text-2xl font-serif'>Customer</p>
                        <span className='text-2xl font-serif font-black'>1000+</span>
                    </div>
                </div>
                <div className="card w-64  shadow-xl image-full text-dark outline outline-offset-2 outline-blue-500 border-2 border-cyan-800 m-10">

                    <div className="card-body">
                        <p className='text-2xl font-serif'>Sale</p>
                        <span className='text-2xl font-serif font-black'>100000+</span>
                    </div>
                </div>
                <div className="card w-64  shadow-xl image-full text-dark outline outline-offset-2 outline-blue-500 border-2 border-cyan-800 m-10">

                    <div className="card-body">
                        <p className='text-2xl font-serif'>Served </p>
                        <span className='text-2xl font-serif font-black'>100+</span>
                    </div>
                </div>
                <div className="card w-64 bg-transparent shadow-xl image-full text-dark outline outline-offset-2 outline-blue-500 border-2 border-cyan-800 m-10">

                    <div className="card-body">
                        <p className='text-2xl font-serif'>Annual revenue</p>
                        <span className='text-2xl font-serif font-black'>120M+</span>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Count;