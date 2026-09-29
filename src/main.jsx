import './index.css'

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import ShopNow from './Page/shopNow/ShopNow';
import Blog from './Page/Blog/Blog';
import Contact from './Page/Contact/Contact';
import About from './Page/About/About';
import Home from './Page/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {index: true, element: <Home></Home>},
      {path: "/shop", element: <ShopNow></ShopNow>},
      {path: "/about", element: <About></About>},
      {path: "/blog", element: <Blog></Blog>},
      {path: "/contact", element: <Contact></Contact>},
      

    ],
  },
 
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);


