import React, { useEffect, useState } from 'react';

import api from '../api';
import { Cart } from './Cart';
import { Product } from './Product';

export default () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get('/cart')
      .then(({ data: cart }) => {
        setCart(cart);
        const ids = Object.keys(cart)
          .map((id) => `id=${id}`)
          .join('&');
        return api.get(`/products?${ids}`);
      })
      .then(({ data: products }) => {
        setProducts(products);
      });
  }, []);

  if (!cart) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <ul>
        {products.map(({ id, name }) => {
          return (
            <li key={id}>
              {name} - Qty {cart[id]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
