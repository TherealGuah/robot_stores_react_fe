import React, {useState, useEffect} from 'react';
import { fetchSingleProduct } from "../../utils/apiRequests";
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const {productId} = useParams();

    useEffect( () => {
        fetchSingleProduct(productId)
            .then(product => setProduct(product[0]))
            .catch(err => err.message = 'Error! Could not resolve promise.');
    }, []);
    console.log(product);
    const {
         _id, id, title, price, image, category_id, category,
        character_id, character, description, image2, image3
    } = product;

    return (
        <div>
            <img src={image} alt="image of product"/>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default SingleProduct;