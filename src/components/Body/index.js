import React from 'react';
import Products from '../Products';
import Header from '../Header';
import Footer from '../Footer';

const Body = () => {
    return (
        <>
            <Header />
            <main>
                <Products />
            </main>
            <Footer />
        </>
    );
};

export default Body;

