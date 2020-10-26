import React from 'react';

interface Props {
  product: {
    id: number;
    name: string;
  };
}

export default ({ product }: Props) => {
  return <div>{product.name}</div>;
};
