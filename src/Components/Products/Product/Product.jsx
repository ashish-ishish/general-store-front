// import react
import React from 'react'

// import icons for better font end
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart, ShoppingBasket, ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({product,onAddToCart}) => {
    const classes = useStyles();

    console.log(product);
    const handleAddToCart = () => onAddToCart(product.id, 1);


    // return <div>test</div>

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                {/* <IconButton aria-label="Add to Cart" onClick={() => handleAddToCart}> */}
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
                {/* <IconButton aria-label="Add to Cart" >
                    <ShoppingBasket />
                </IconButton> */}
                </CardActions>
            </Card> 
        </div>
    )
}


// export Products
export default Product;
