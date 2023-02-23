const endpoint = 'https://robotapi.2022-pedron.dev.io-academy.uk';

export const fetchProducts = async () => {
    const response = await fetch(`${endpoint}/products`);
    if (!response.ok) {
        throw new Error();
    }
    return await response.json();
};

export const fetchSingleProduct = async (productId) => {
    const response = await fetch(`${endpoint}/products/${productId}`);
    if (!response.ok) {
        throw new Error();
    }
    return await response.json();
};