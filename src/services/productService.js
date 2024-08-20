export async function getProductList(searchTerm ) {
    const response = await fetch(`http://localhost:8000/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    const data = await response.json();
    return data;
}

export async function getProduct(id) {
    try {
        const response = await fetch(`http://localhost:8000/444/products/${id}`);

        // Check if the response status is not 200 (OK), which could mean the product is not found
        if (!response.ok) {
            return null; // Return null or undefined to indicate that the product was not found
        }

        const data = await response.json();

        // If the product data is empty, return null
        if (!data || Object.keys(data).length === 0) {
            return null;
        }

        return data;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null; // Return null in case of any error during the fetch operation
    }
}


export async function getFeaturedList() {
    const response = await fetch('http://localhost:8000/444/featured_products');
    const data = await response.json();
    return data;
}