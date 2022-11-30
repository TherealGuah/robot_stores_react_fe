import { useEffect, useState } from "react";
import { fetchProducts } from '../../utils/apiRequests';
import Product from '../Product/index';

const Products = () => {
    // state setter and getter
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetchProducts()
            .then( (productsData) => {
                setProducts(productsData);
            })
            .catch((err) => {
                err.message = 'Error! Could not resolve promise.';
            });
    }, []);

    return (
        <>
            {
            products.map((product) => {
                return (
                    <Product product={product} key={product.id}/>
                );
            })
            }
        </>
    );
};

export default Products;