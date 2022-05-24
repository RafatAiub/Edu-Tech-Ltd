import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools></Tools>
            <BusinessSummary />
        </div>
    );
};

export default Home;