import React from 'react';

const Count = () => {
    let counts = setInterval(updated);
    let upto = 0;
    function updated() {
        var count = document.getElementById("counter");
        // var count2 = document.getElementById("counter2");
        // count.innerHTML = ++upto;
        // if (upto === 1000) {
        //     clearInterval(counts);
        // }
    }
    return (
        <div className='lg:my-10 lg:py-20 bg-gradient-to-r from-gray-100 to-pink-100 uppercase'>
            <div className=''>
                <div class="card w-64  shadow-xl image-full text-dark outline outline-offset-2 outline-blue-500 border-2 border-cyan-800 m-10">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='text-2xl font-serif'>Customer</p>
                        <span className='text-2xl font-serif font-black'>1000+</span>
                    </div>
                </div>
                <div class="card w-64  shadow-xl image-full text-dark outline outline-offset-2 outline-blue-500 border-2 border-cyan-800 m-10">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='text-2xl font-serif'>Sale</p>
                        <span className='text-2xl font-serif font-black'>100000+</span>
                    </div>
                </div>
                <div class="card w-64  shadow-xl image-full text-dark outline outline-offset-2 outline-blue-500 border-2 border-cyan-800 m-10">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='text-2xl font-serif'>FB Likes</p>
                        <span className='text-2xl font-serif font-black'>100000+</span>
                    </div>
                </div>
                <div class="card w-64  shadow-xl image-full text-dark outline outline-offset-2 outline-blue-500 border-2 border-cyan-800 m-10">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='text-2xl font-serif'>Rateting</p>
                        <span className='text-2xl font-serif font-black'>4.5</span>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Count;