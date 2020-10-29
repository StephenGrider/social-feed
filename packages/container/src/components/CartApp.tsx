import React, { useRef, useEffect } from 'react';
import { History } from 'history';
// @ts-ignore
import { mount, unmount } from '@npegrider/cart/CartApp';

interface Props {
  history: History;
  onSignIn: () => void;
}

export default ({ history, onSignIn }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let current = ref.current;

    if (current) {
      mount(current, history, {
        onSignIn,
      });
    }

    return () => {
      if (current) {
        unmount(current);
      }
    };
  }, []);

  return <div ref={ref} />;
};
