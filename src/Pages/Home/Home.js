import React from 'react';
import Banner from './Banner/Banner';
import HomeTools from './HomeTools/HomeTools';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeTools></HomeTools>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;