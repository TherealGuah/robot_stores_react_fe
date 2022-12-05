export const fetchProducts = async () => {
    const response = await fetch('http://localhost:4000/products');
    if (!response.ok) {
        throw new Error();
    }
    return await response.json();
};