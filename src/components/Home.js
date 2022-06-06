import React from 'react';
import AddFormats from './add-format/AddFormats';
import Banner from './Banner';
import Header from './Header';
import Navbar from './Navbar';
import OurService from './OurService';
const Home = () => {
    return (
        <div className='h-screen'>
            <Header></Header>
            <Navbar></Navbar> 
            <Banner></Banner> 
            <OurService></OurService> 
            <AddFormats></AddFormats>        
        </div>
        // container mx-auto overflow-hidden
    );
};

export default Home;