import {Link} from 'react-router-dom';
import React from "react";
import {ReactComponent as RobotLogo} from './robot_logo.svg';
const Home = () => {
    
    // TODO: Style Home Page
    return (
        <>
            <h1>Welcome to Robots Store</h1>
            <RobotLogo />
            <img src="https://www.binaryville.com/images/product-montage.png" alt="Robot Store Merchandise"/>
            <Link to={'/products'}>
                <h1>Enter Store</h1>
            </Link>
        </>
    );
};

export default Home;