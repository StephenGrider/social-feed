import React, { useRef, useEffect, useState } from 'react';
import { render } from '@npegrider/cart/CartApp';

export default ({ history, events }) => {
  const ref = useRef();

  useEffect(() => {
    // (async () => {
    //   const { render } = await import('@npegrider/feed/FeedApp');

    //   if (ref.current) {
    //     setApp(render(ref.current, history, events));
    //   }
    // })();

    if (ref.current) {
      render(ref.current, history, events);
    }
  }, []);

  return <div ref={ref} />;
};
