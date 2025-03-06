export async function fetchProducts(categoryId) {
    try {
        const url = categoryId 
            ? `http://localhost/api/categories/${categoryId}/products`
            : 'http://localhost/api/products';
        
        const response = await fetch(url);
        const data = await response.json();
        
        return data.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}
