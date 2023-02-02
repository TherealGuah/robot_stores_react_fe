import React from 'react';
import Products from '../Products';
import Header from '../Header';
import Footer from '../Footer';
import {Link} from "react-router-dom";

const Body = () => {
    return (
        <>
            <Link to={"/"}>Home</Link>
            <Header />
            <main>
                <Products />
            </main>
            <Footer />
        </>
    );
};

export default Body;

