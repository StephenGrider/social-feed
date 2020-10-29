import React, { useRef, useEffect } from 'react';
import { History } from 'history';
import { mount, unmount } from '@npegrider/products/ProductsApp';
import Events from '../Events';

interface Props {
  history: History;
  events: Events;
}

export default ({ history, events }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let current = ref.current;

    if (current) {
      mount(current, history);
    }

    return () => {
      if (current) {
        unmount(current);
      }
    };
  }, []);

  return <div ref={ref} />;
};
