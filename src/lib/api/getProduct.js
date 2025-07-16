export async function getProduct(id) {
  const apiUrl = process.env.API_URL;
  const response = await fetch(`${apiUrl}/product/${id}`);
  const product = await response.json();
  return product
}
