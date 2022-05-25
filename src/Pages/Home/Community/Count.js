import React from 'react';

const Count = () => {
    let counts = setInterval(updated);
    let upto = 0;
    function updated() {
        var count = document.getElementById("counter");
        // var count2 = document.getElementById("counter2");
        count.innerHTML = ++upto;
        if (upto === 1000) {
            clearInterval(counts);
        }
    }
    return (
        <div className='my-10 py-20 bg-gradient-to-r from-gray-100 to-pink-100 uppercase'>
            <h1 className='font-black text-5xl uppercase text-red-500 text-center'>Our Business Portfolio</h1>
            <h5 className='text-center'>JOIN WITH US! NOW</h5>
            <div className=' grid grid-cols-4 gap-1 justify-center items-center text-center my-20'>
                <div className='text-dark outline outline-offset-2 outline-blue-500  p-5 border-2 border-cyan-800 m-10 rounded'>
                    <p className='text-2xl font-serif'>Customer</p>
                    <span className='text-2xl font-serif font-black'>1000+</span>
                </div>
                <div className='col-start-2 col-span-1 text-dark outline outline-offset-2 outline-cyan-500 p-2 border-2 border-cyan-800 m-10 rounded'>
                    <p className='text-2xl font-serif'>Sale</p>
                    <div className=' font-bold text-6xl font-serif font-black' id="counter">
                    </div>
                </div>


                <div className='text-dark outline outline-offset-2 outline-cyan-500 p-5 border-2 border-cyan-800 m-10 rounded'>
                    <p className='text-2xl font-serif'>FB Likes</p>
                    <span className='text-2xl font-serif font-black'>100000+</span>
                </div>
                <div className='text-red-500 outline outline-offset-2 outline-cyan-500 p-5 border-2 border-cyan-800 m-10 rounded shadow-lg'>
                    <p className='text-2xl font-serif'>Rateting</p>
                    <span className='text-2xl font-serif font-black'>4.5</span>
                </div>

            </div>
        </div>

    );
};

export default Count;