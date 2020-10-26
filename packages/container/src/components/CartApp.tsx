import React, { useRef, useEffect } from 'react';
import { History } from 'history';
import { render } from '@npegrider/cart/CartApp';
import Events from '../Events';

interface Props {
  history: History;
  events: Events;
}

export default ({ history, events }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      render(ref.current, history);
    }
  }, []);

  return <div ref={ref} />;
};
