export const fetchProducts = async(limit, page) => {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(page-1)*limit}`);
    const data = await response.json()
    return data;
}

export const fetchProductsByCategory = async(category, limit, page) => {
    const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${(page-1)*limit}`)
    const data = await response.json()
    return data
}