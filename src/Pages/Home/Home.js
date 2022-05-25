import React from 'react';
import Banner from './Banner/Banner';
import Community from './Community/Community';
import HomeTools from './HomeTools/HomeTools';
import Reviews from './Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeTools></HomeTools>
            <Community></Community>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;