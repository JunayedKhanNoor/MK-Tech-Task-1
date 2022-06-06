import React from 'react';
import AddFormats from './add-format/AddFormats';
import Banner from './Banner';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import OurService from './OurService';
import SecondBanner from './SecondBanner';
const Home = () => {
    return (
        <div className='h-screen'>
            <Header></Header>
            <Navbar></Navbar> 
            <Banner></Banner> 
            <OurService></OurService> 
            <AddFormats></AddFormats> 
            <SecondBanner></SecondBanner> 
            <Carousel></Carousel>
            <Footer></Footer>     
        </div>
        // container mx-auto overflow-hidden
    );
};

export default Home;