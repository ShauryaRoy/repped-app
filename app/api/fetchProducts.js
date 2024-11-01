import axios from 'axios';

export const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:3000/products');  // Update with your API URL
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};
