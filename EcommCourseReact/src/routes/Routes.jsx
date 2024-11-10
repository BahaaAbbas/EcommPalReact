import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import SingleProduct from "../pages/SingleProduct";


const router = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        children : [
            {
                path: '',
                element: <Home/>

            },
            {
                path: 'cart',
                element: <Cart/>

            },
            {
                path: 'product/:id',
                element: <SingleProduct/>

            },

       

        ]
    }
])

export default router