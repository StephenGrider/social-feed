import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  GridList,
  GridListTile,
  GridListTileBar,
} from '@material-ui/core';

import { Product } from './Product';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default (p: any) => {
  const classes = useStyles();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/products')
      .then(({ data }) => setProducts(data));
  }, []);

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} spacing={1}>
        {products.map((product) => (
          <GridListTile
            key={product.id}
            cols={product.id % 3 ? 1 : 2}
            rows={product.id % 3 ? 1 : 2}
          >
            <Link to={`/products/${product.id}`}>
              <img src={product.img} />
              <GridListTileBar
                title={product.name}
                titlePosition="top"
                actionPosition="left"
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
