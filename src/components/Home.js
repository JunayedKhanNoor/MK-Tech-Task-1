import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
const Home = () => {
    return (
        <div className='h-screen'>
            <Header></Header>
            <Navbar></Navbar>           
        </div>
        // container mx-auto overflow-hidden
    );
};

export default Home;