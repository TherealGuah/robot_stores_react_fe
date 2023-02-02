import React, { useEffect, useState } from "react";
import Product from '../Product';
import Categories from "../Categories";
import Characters from "../Characters";
import { fetchProducts } from "../../utils/apiRequests";
import {filterProducts} from "../../utils/utils";

const Products = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState(
        {
            'Aprons': true,
            'Hats': true,
            'Mugs': true,
            'Shirts': true,
            'Bubbles': true,
            'Dolores': true,
            'Fred': true,
            'Rex': true
        });

    const handleChange = (event) => {
        let category = event.target.id;
        let newState = categories;
        newState[category] = event.target.checked;
        setCategories((prevState) => {
            return {...prevState, ...newState};
        });
    }

    useEffect( () => {
        fetchProducts()
            .then(productsData => setProducts(productsData))
            .catch(err => err.message = 'Error! Could not resolve promise.');
    }, [categories]);

    let filteredProducts = filterProducts(products, categories);
    
    return (
        <>
            <div id="categories">
                <Categories handleChange={handleChange}/>
                <Characters handleChange={handleChange}/>
            </div>
            <ul>
                {
                filteredProducts.map((product, index) => {
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