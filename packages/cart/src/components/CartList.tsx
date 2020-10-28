import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCartAndProducts, Cart, Product } from '../api';

export default () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getCartAndProducts().then(({ cart, products }) => {
      setCart(cart);
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
      <Link to="/cart/finalize">Finalize</Link>
    </div>
  );
};
