import React from 'react';
import ProductItem from './ProductItem';

interface Props {
  products: {
    id: number;
    name: string;
  }[];
}

export default ({ products }: Props) => {
  const renderedProducts = products.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });

  return <div>{renderedProducts}</div>;
};
