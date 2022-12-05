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

    const {
         _id, id, title, price, image, category_id, category,
        character_id, character, description, image2, image3
    } = product;
    const handleBack = (ev) => {

    };

    return (
        <div>
            <img src={image} alt="image of product"/>
            <h1>{title}</h1>
            <p>{description}</p>
            <Link to='/products'>
                <button onClick={handleBack}>Back</button>
            </Link>
        </div>
    );
};

export default SingleProduct;