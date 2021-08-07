// Import react and grid
import React from 'react';
import {Grid} from '@material-ui/core';

// import styles crated in Product folder
import Product from './Product/Product';
import useStyles from './styles';



// // constant - items (temporary items before database)
// const products = [
//     { id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$5'},
//     { id: 2, name: 'Macbook', description: 'Apple macbook', price: '$10'},
// ];

// const of product
const Products = ( {products,onAddToCart} ) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} /> 
                <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                      // pass onAddToCart one level deeper
                    <Product product={product} onAddToCart={onAddToCart}/>
                  </Grid>
                ))}
                </Grid>
        </main>
    );
}

// export Products
export default Products;