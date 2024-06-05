export async function getAllProducts() {
    try {
      const response = await fetch('http://localhost:3000/api/products');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Failed to fetch products:', error);
      throw error;
    }
  }
  
  export async function getProductById(productId) {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${productId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Failed to fetch product:', error);
      throw error;
    }
  }
  