import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import TourPackages from '../TourPackages/TourPackages';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <TourPackages></TourPackages>
            {/* <Services></Services> */}
 
        </div>
    );
};

export default Home;