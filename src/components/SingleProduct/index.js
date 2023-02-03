import React, {useState, useEffect} from 'react';
import { fetchSingleProduct } from "../../utils/apiRequests";
import { useParams, Link } from 'react-router-dom';

const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const {productId} = useParams();

    useEffect( () => {
        fetchSingleProduct(productId)
            .then(product => setProduct(product[0]))
            .catch(err => err.message = 'Error! Could not resolve promise.');
    }, []);

    const {title, price, image, category,
        character, description
    } = product;

    return (
        <div id="product">
            <img src={image} alt="image of product"/>
            <h1>{title}</h1>
            <p>{description}</p>
            <Link to='/products'>
                <h2>Back to Products</h2>
            </Link>
        </div>
    );
};

export default SingleProduct;