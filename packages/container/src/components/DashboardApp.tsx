import React, { useRef, useEffect } from 'react';
import { History } from 'history';
// @ts-ignore
import { mount, unmount } from '@npegrider/dashboard/DashboardApp';
import Events from '../Events';

interface Props {
  history: History;
  events: Events;
}

export default ({ history, events }: Props) => {
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
