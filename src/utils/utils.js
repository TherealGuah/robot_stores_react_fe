
export const filterProducts = (productsToFilter, categories) => {
    let filteredProducts = productsToFilter;

    if (!categories['Aprons']) {
        filteredProducts = filteredProducts.filter(product => product.category_id !== 1);
    }
    if (!categories['Hats']) {
        filteredProducts = filteredProducts.filter(product => product.category_id !== 2);
    }
    if (!categories['Mugs']) {
        filteredProducts = filteredProducts.filter(product => product.category_id !== 3);
    }
    if (!categories['Shirts']) {
        filteredProducts = filteredProducts.filter(product => product.category_id !== 4);
    }
    if (!categories['Fred']) {
        filteredProducts = filteredProducts.filter(product => product.character_id !== 1);
    }
    if (!categories['Bubbles']) {
        filteredProducts = filteredProducts.filter(product => product.character_id !== 2);
    }
    if (!categories['Dolores']) {
        filteredProducts = filteredProducts.filter(product => product.character_id !== 3);
    }
    if (!categories['Rex']) {
        filteredProducts = filteredProducts.filter(product => product.character_id !== 4);
    }

    return filteredProducts;
}