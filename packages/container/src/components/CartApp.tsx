import React, { useRef, useEffect } from 'react';
import { History } from 'history';
// @ts-ignore
import { mount, unmount } from '@npegrider/cart/CartApp';
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
      mount(ref.current, history);
    }

    return () => {
      unmount(current);
    };
  }, []);

  return <div ref={ref} />;
};
