import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Navbar from './Navbar';
const Home = () => {
    return (
        <div className='h-screen'>
            <Header></Header>
            <Navbar></Navbar> 
            <Banner></Banner>          
        </div>
        // container mx-auto overflow-hidden
    );
};

export default Home;