export async function getPaginatedProducts({
  page,
  limit = 12,
  category = null,
  sortBy = 'rating',
  sortOrder = 'desc'
}) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/products?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}${category ? `&category=${category}` : ''}`);
  const products = await response.json();
  return products
}
