import React from 'react';
import roni from './../../Pic/roni.png'
import { FaReact, FaNode } from 'react-icons/fa';

const MyPortfolio = () => {
    return (
        <div>
            <div className='pt-20 px-10 grid grid-cols-1 lg:grid-cols-3 gap-2 items-center bg-slate-900 text-white'>
                <div>
                    <h1 className='text-white font-serif text-5xl py-5 first-line:uppercase first-line:tracking-widest
                   first-letter:text-9xl first-letter:font-bold first-letter:text-yellow-300
                  first-letter:mr-3 first-letter:float-left'>RAHUL DAHR RONI</h1>
                    <h1>MONGODB| EXPRESS JS| REACT JS |NODE JS  </h1>
                    <button className="btn btn-outline btn-warning my-5">Warning</button>
                </div>
                <div className='bg-slate-700 rounded-full items-end justify-center'>
                    <img src={roni} alt="" />
                </div>
                <div className='p-5'>
                    <h1 className='text-red-500'>INTRODUCTION</h1>
                    <h1 className='text-white font-serif text-3xl py-5'>WEB DEVELOPER | WORDPRESS DEVELOPER| GRAPHIC DESIGNER</h1>
                    <p>I can create the coding that brings a website to life and helps it to perform as required by the host.
                        I will take responsibility for what functions can be performed when a user lands on the web page.
                    </p>
                    <h1 className='text-red-500'>LERN MORE</h1>
                </div>
            </div>
            {/* //second section */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 px-4'>
                <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                    <div>
                        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                            <FaReact />
                        </span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    </p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                    <div>
                        <span className="inline-flex items-center justify-center p-2 bg-indigo-400 rounded-md shadow-lg">
                            <FaNode />
                        </span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    </p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                    <div>
                        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                            <FaNode />
                        </span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    </p>
                </div>
            </div>

        </div >
    );
};

export default MyPortfolio;