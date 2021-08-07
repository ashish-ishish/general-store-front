import React, { useState, useEffect } from 'react';
// api that makes the back-end much easier, regarding the purchase of things
import { commerce } from './lib/commerce';
// For routes, for navigation of different pages
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



// import Products from './Components/Products/Products';
import { Navbar, Products, Cart, Checkout } from './Components';


export const App = () => {
 
      const [mobileOpen, setMobileOpen] = React.useState(false);


    const [products, setproducts] = useState([]);
    const [cart, setcart] = useState({})
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');




    // fetch the response from a specfic api call ( promise )
    // then data will be our product
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setproducts(data);
    };

    // fetch the response from a specific api call (promise)
    // data here will be our cart
    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();

        setcart(cart)
    };
    
    // cart functions
    // handle the number of items in the cart
    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setcart(item.cart);
    };
    // handle the updating of number of items in the cart
    const handleUpdateCartQty = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, { quantity });

        setcart(response.cart);
    };
    const handleRemoveFromCart = async (lineItemId) => {
        const response = await commerce.cart.remove(lineItemId);

        setcart(response.cart);
    };
    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();

        setcart(response.cart);
    };





    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setcart(newCart);
    };



    // api 
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
      try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

        setOrder(incomingOrder);

        refreshCart();
      } catch (error) {
        setErrorMessage(error.data.error.message);
      }
    };







    // fetch arrays from the api
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    // console.log(products);
    console.log(cart);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);


    return (
        // <div>
        //     {/* passing totalItems to the navbar */}
        //     <Navbar totalItems={cart.total_items}/>
        //     {/* passing products to the products
        //     as well as adding cart handler to the products */}
        //     {/* <Products products={products} onAddToCart={handleAddToCart}/> */}
        //     <Cart cart={cart} />
        // </div>
        <Router>
           <div style={{ display: 'flex' }}>
             {/* <CssBaseline /> */}
             {/* <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} /> */}
             <Navbar totalItems={cart.total_items} />
             {/* <Navbar totalItems={cart.total_items} /> */}
             <Switch>
               <Route exact path="/">
                 <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
               </Route>
               <Route exact path="/cart">
                 <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
                 {/* <Cart cart={cart}  /> */}
               </Route>
               { <Route path="/checkout" exact>
                 <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
                 {/* <Checkout cart={cart}  /> */}
                 {/* <Checkout  /> */}
               </Route> }
             </Switch>
           </div>
        </Router>
    )
}

export default App;