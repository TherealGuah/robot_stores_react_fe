export const extractResponseData = (response) => {
    return response.json();
};

export const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/products');
    if (!response.ok) {
        throw new Error();
    }
    return await extractResponseData(response);
};

export const fetchProduct = async (productId) => {
    const response = await fetch(`http://localhost:3000/products/${productId}`);
    if (!response.ok) {
        throw new Error();
    }
    return await extractResponseData(response);
};

