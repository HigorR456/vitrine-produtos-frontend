import { getProduct } from "@/lib/api/products/getProduct";

export async function getCartProducts() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');

  if (!Array.isArray(cart) || cart.length === 0) {
    return [];
  }

  const productPromises = cart.map(async (item) => {
    const product = await getProduct(Number.parseInt(item.id));
    return {
      ...product,
      quantity: item.quantity,
    };
  });

  const productsWithDetails = await Promise.all(productPromises);

  return productsWithDetails;
}
