import './App.css';
import React, { Component } from "react";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "./components/Home";
import Games from "./components/Games";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import SaveToJson from './components/SaveToJson';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,     
  },
  {
    path: "/games",
    element: <Games/>,     
  },
  {
    path: "/SaveToJson",
    element: <SaveToJson/>,     
  },
  {
    path: "/cart",
    element: <Cart/>,     
  },{
    path: "/checkout",
    element: <Checkout/>,     
  },
]);
class App extends Component {
  render() {
    
      return <RouterProvider router={router} />;
    
  }
}

export default App;