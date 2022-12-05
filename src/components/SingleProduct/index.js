import React, {useState, useEffect} from 'react';
import {fetchSingleProduct} from "../../utils/apiRequests";

const SingleProduct = () => {
    const [product, setProduct] = useState([]);

    useEffect( () => {
        fetchSingleProduct()
            .then(product => setProduct(product))
            .catch(err => err.message = 'Error! Could not resolve promise.');
    }, []);
    console.log(product)
    const {
        _id, id, title, price, image, category_id, category,
        character_id, character, description, image2, image3
    } = product[0];

    return (
        <>
            <img src={image} alt="image of product"/>
            <h1>{title}</h1>
            <p>{description}</p>




        </>
    );
};

export default SingleProduct;