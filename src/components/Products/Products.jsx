import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//   { id: 1, name: 'shoes', description: 'Running shoes', price: '$5', image: 'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/04cfa08e-6537-4475-9673-b5538eeaf170/flex-experience-run-9-running-shoe-MHR7Qv.jpg'},
//   { id: 2, name: 'macbook', description: 'Apple macbook', price: '$10', image: 'https://cdn.vox-cdn.com/thumbor/B_m51P0G8JJQtfVOZIl0djgcqhE=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/67817284/vpavic_4291_20201113_0366.0.0.jpg'},
// ];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={ onAddToCart }/>
            </Grid>
          ))
        }
      </Grid>
    </main>
  );
};

export default Products;
