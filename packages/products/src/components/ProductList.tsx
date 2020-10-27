import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../api';
import { Product } from './Product';

export default () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('/products').then(({ data }) => setProducts(data));
  }, []);

  return (
    <div>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price} -<Link to={`/products/${p.id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
