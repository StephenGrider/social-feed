import React, { useRef, useEffect } from 'react';
import { mount, unmount } from '@npegrider/dashboard/DashboardApp';

export default () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let current = ref.current;
    let app: any;

    if (current) {
      app = mount(current);
    }

    return () => {
      if (current) {
        unmount(current, app);
      }
    };
  }, []);

  return <div ref={ref} />;
};
