import {Link} from 'react-router-dom';
import React from "react";
import {ReactComponent as RobotLogo} from './logo_light.svg';
const Home = () => {

    // TODO: Style Home Page
    return (
        <div id="home">
            <h1>Welcome to Robots Store</h1>
            <RobotLogo />
            <img src="https://www.binaryville.com/images/product-montage.png" alt="Robot Store Merchandise"/>
            <Link to={'/products'}>
                <h2>Enter Store</h2>
            </Link>
        </div>
    );
};

export default Home;