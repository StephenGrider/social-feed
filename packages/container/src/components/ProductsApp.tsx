import React, { useRef, useEffect } from 'react';
import { History } from 'history';
import { render } from '@npegrider/products/ProductsApp';
import Events from '../Events';

interface Props {
  history: History;
  events: Events;
}

export default ({ history, events }: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      render(ref.current, history, events);
    }
  }, []);

  return <div ref={ref} />;
};
