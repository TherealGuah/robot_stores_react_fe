export const fetchProducts = async () => {
    const response = await fetch('http://localhost:4000/products');
    if (!response.ok) {
        throw new Error();
    }
    return await response.json();
};

// TODO: Hardcoded for now change to display dynamically
export const fetchSingleProduct = async () => {
    const response = await fetch('http://localhost:4000/products/1');
    if (!response.ok) {
        throw new Error();
    }
    return await response.json();
};