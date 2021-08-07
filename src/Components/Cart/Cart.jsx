import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

// import CartItem for individual item
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    // styles hook
    const classes = useStyles();

//   const handleEmptyCart = () => onEmptyCart();
    // const isEmpty = Object.keys(cart).length && !cart.line_items.length;
    if(!cart.line_items) {
        return '...loading';
        console.log("items are currently empty")
    };

    // if no items, then link to homepage
    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your shopping cart.
            <Link to="/" className={classes.link}>Add some items</Link>
        </Typography>
    );

    const FilledCart = () => (
      <>
        <Grid container spacing={3}>
            {/* {cart.line_items.map((lineItem) => ( */}
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    {/* <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} /> */}
                    <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                    {/* <CartItem item={item}  /> */}
                    {/* <div>{item.name}</div> */}
                </Grid>
            ))}
         </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={onEmptyCart}>Empty cart</Button>
                {/* <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty cart</Button> */}
                <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
                {/* <Button className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Checkout</Button> */}
            </div>
        </div>
      </>
  )

//   const renderEmptyCart = () => (
//     <Typography variant="subtitle1">You have no items in your shopping cart,
//       <Link className={classes.link} to="/">start adding some</Link>!
//     </Typography>
//   );

//   if (!cart.line_items) return 'Loading';

//   const renderCart = () => (
//     <>
//       <Grid container spacing={3}>
//         {cart.line_items.map((lineItem) => (
//           <Grid item xs={12} sm={4} key={lineItem.id}>
//             <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
//           </Grid>
//         ))}
//       </Grid>
//       <div className={classes.cardDetails}>
//         <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
//         <div>
//           <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
//           <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
//         </div>
//       </div>
//     </>
//   );

  // cart view return
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      {/* { !cart.line_items.length ? renderEmptyCart() : renderCart() } */}
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
      {/* { isEmpty ? <EmptyCart /> : <filledCart /> } */}
    </Container>
  );
};

export default Cart;