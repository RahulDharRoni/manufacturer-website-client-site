import React from 'react';

const Blogs = () => {
    return (
        <div>
            <section className="text-gray-700">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Frequently Asked Question
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            The most common questions about how our business works and what
                            can do for you.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="w-full lg:w-1/2 px-4 py-2">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    How will you improve the performance of a React Application?
                                </summary>

                                <span>
                                    We need to make sure that components receive only necessary props.
                                    Keeping component state local where necessary.
                                    Memoizing React components to prevent unnecessary re-renders.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                    What are the different ways to manage a state in a React application?
                                </summary>

                                <span>
                                    4 Types of Application State in React : Local state,Global state,Server state,URL state.How is state handled in React?
                                    React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    How does prototypical inheritance work?
                                </summary>

                                <span>
                                    It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                                </span>
                            </details>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 py-2">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                                </summary>

                                <span className="px-4 py-2">
                                    In a loop traverse through each element (or get each element from user) multiply each element to product.However we can you map as well.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    What is a unit test? Why should write unit tests?
                                </summary>

                                <span className="px-4 py-2">
                                    Why should we write unit tests?
                                    Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount.<br />
                                    In an invalid situation, the function will notify us that we are doing something wrong ,The function will identify this invalid situation and log it
                                </span>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;