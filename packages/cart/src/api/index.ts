import axios from 'axios';
import { Cart } from './Cart';
import { Product } from './Product';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'http://localhost:3000'
      : 'http://localhost:3000',
});

export { Cart };
export { Product };
export async function getCartAndProducts() {
  const { data: cart } = await api.get<Cart>('/cart');
  const ids = Object.keys(cart)
    .map((id) => `id=${id}`)
    .join('&');

  const { data: products } = await api.get<Product[]>(`/products?${ids}`);

  return { products, cart };
}
