export async function fetchCategories() {
    try {
        const response = await fetch('http://localhost/api/categories/');
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}
