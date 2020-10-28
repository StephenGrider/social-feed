import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCartAndProducts } from '../api';

export default () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getCartAndProducts().then(({ cart, products }) => {
      setTotal(
        products.reduce((acc, product) => {
          return acc + product.price * cart[product.id];
        }, 0)
      );
    });
  }, []);

  return (
    <div>
      <h3>Total due today: ${total}</h3>
      <Link to="/cart">Back To Cart</Link>
    </div>
  );
};
