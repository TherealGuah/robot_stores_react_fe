import React, { useEffect, useState } from "react";
import Product from '../Product';
import Categories from "../Categories";
import Characters from "../Characters";
import { fetchProducts } from "../../utils/apiRequests";

const Products = () => {

    const [products, setProducts] = useState([]);
    const [checkboxState, setCheckboxState] = useState(
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
        let newState = checkboxState;
        newState[category] = event.target.checked;
        setCheckboxState((prevState) => {
            return {...prevState, ...newState};
        });
    }

    useEffect( () => {
        fetchProducts()
            .then(productsData => setProducts(productsData))
            .catch(err => err.message = 'Error! Could not resolve promise.');
    }, [checkboxState]);

    console.log(products);

    const filterProducts = (productsToFilter, categories) => {
        let filteredProducts = productsToFilter;

        if (!categories['Aprons']) {
            filteredProducts = products.filter(product => product.category_id !== 1);
        }
        if (!categories['Hats']) {
            filteredProducts = products.filter(product => product.category_id !== 2);
        }
        if (!categories['Mugs']) {
            filteredProducts = products.filter(product => product.category_id !== 3);
        }
        if (!categories['Shirts']) {
            filteredProducts = products.filter(product => product.category_id !== 4);
        }
        if (!categories['Fred']) {
            filteredProducts = products.filter(product => product.character_id !== 1);
        }
        if (!categories['Bubbles']) {
            filteredProducts = products.filter(product => product.character_id !== 2);
        }
        if (!categories['Dolores']) {
            filteredProducts = products.filter(product => product.character_id !== 3);
        }
        if (!categories['Rex']) {
            filteredProducts = products.filter(product => product.character_id !== 4);
        }

        return filteredProducts;
    }

    let filteredProducts = filterProducts(products, checkboxState);

    console.log(checkboxState);
    console.log(filteredProducts);

    return (
        <>
            <div>
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