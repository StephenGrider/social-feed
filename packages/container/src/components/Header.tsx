import React from 'react';
import { Link } from 'react-router-dom';
import Events from '../Events';

export default ({ events }: { events: Events }) => {
  return (
    <>
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
    </>
  );
};
