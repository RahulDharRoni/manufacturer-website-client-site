import React from 'react';
import Banner from './Banner/Banner';
import CountDown from './CountDown/CountDown';
import HomeTools from './HomeTools/HomeTools';
import Reviews from './Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeTools></HomeTools>
            <CountDown></CountDown>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;