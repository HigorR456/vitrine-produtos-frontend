export async function getPaginatedProducts(page = 1, limit = 12, category = null) {
  const apiUrl = process.env.API_URL;
  const response = await fetch(`${apiUrl}/products?page=${page}&limit=${limit}${category ? `&category=${category}` : ''}`);
  const products = await response.json();
  return products
}
