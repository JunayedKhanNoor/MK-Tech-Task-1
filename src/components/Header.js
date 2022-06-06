import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between py-6 px-2'>
            <h1 className='uppercase font-bold text-2xl'>Logo</h1>
            <p role='button'><span className='text-green-500'>BN</span> / <span> EN</span></p>
        </div>
    );
};

export default Header;