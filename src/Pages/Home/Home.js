import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ReviewSection from './ReviewSection';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools></Tools>
            <ReviewSection />
            <BusinessSummary />
        </div>
    );
};

export default Home;