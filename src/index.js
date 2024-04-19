import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import RestaurantMenu from './pages/RestaurantMenu';
import Cart from './pages/Cart';
import SearchMenu from './pages/SearchMenu';
import SearchRestaurant from './pages/SearchRestaurant';

const root = ReactDOM.createRoot(document.getElementById('root'));

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "/restaurant/:id",
    element: <RestaurantMenu/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/search/menu/:restaurantId",
    element:<SearchMenu/>
  },
  {
    path:"/search/restaurant",
    element:<SearchRestaurant/>
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <RouterProvider router={router} />
      </ClerkProvider>
    </Provider>
  </React.StrictMode>,
)

