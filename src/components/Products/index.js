import React, { useEffect, useState } from "react";
import Product from '../Product';
import Categories from "../Categories";
import Characters from "../Characters";
import { fetchProducts } from "../../utils/apiRequests";

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
                    products.map((product, index) => {
                        return (
                            <Product product={product} key={index}/>
                        );
                    })
                }
            </ul>
        </>
    );
};

export default Products;