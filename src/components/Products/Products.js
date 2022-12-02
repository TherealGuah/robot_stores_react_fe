import { useEffect, useState } from "react";
import { fetchProducts } from '../../utils/apiRequests';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetchProducts()
            .then(productsData => setProducts(productsData))
            .catch(err => err.message = 'Error! Could not resolve promise.');
    }, []);

    return (
        <ul>
            {
            products.map((product) => {
                return (
                    <Product product={product} key={product.id}/>
                );
            })
            }
        </ul>
    );
};

export default Products;