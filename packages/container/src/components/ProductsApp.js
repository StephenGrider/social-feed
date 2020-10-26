import React, { useRef, useEffect, useState } from 'react';
import { render } from '@npegrider/products/ProductsApp';

export default ({ history, events }) => {
  const ref = useRef();

  useEffect(() => {
    // (async () => {
    //   const { render } = await import('@npegrider/search/SearchApp');

    //   if (ref.current) {
    //     render(ref.current, history, events);
    //   }
    // })();

    if (ref.current) {
      render(ref.current, history, events);
    }
  }, []);

  return <div ref={ref} />;
};
