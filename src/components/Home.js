import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
const Home = () => {
    return (
        <div className='container mx-auto overflow-hidden'>
            <Header></Header>
            <Navbar></Navbar>           
        </div>
    );
};

export default Home;