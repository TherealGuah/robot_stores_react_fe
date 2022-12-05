import { useEffect, useState } from "react";
import { fetchProducts } from '../../utils/apiRequests';
import Product from '../Product/Product';
import Categories from "../Categories/Categories";
import Characters from "../Characters/Characters";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetchProducts()
            .then(productsData => setProducts(productsData))
            .catch(err => err.message = 'Error! Could not resolve promise.');
    }, []);

    return (
        <>
            <div>
                <Categories />
                <Characters />
            </div>
            <ul>
                {
                products.map((product) => {
                    return (
                        <Product product={product} key={product.id}/>
                    );
                })
                }
            </ul>
        </>
    );
};

export default Products;