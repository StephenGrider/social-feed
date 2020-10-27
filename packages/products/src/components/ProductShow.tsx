import React, { useEffect, useState } from 'react';
import api from '../api';
import { Product } from './Product';

interface Props {
  match: {
    params: {
      id: number;
    };
  };
}

export default ({ match }: Props) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    api
      .get(`/products/${match.params.id}`)
      .then(({ data }) => setProduct(data));
  }, []);

  const onButtonClick = async () => {
    const { data: cart } = await api.get('/cart');

    if (product) {
      cart[product.id] = (cart[product.id] || 0) + 1;
      api.put('/cart', cart);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {product.name} - {product.price}
      <div>
        <button onClick={onButtonClick}>Add to cart</button>
      </div>
    </div>
  );
};
