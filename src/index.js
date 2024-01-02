import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/context/user.context.jsx";
import { Categories } from './components/context/categories.context.jsx';
import { CartProvider } from "./components/context/cart.context.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <Categories>
            <App />
          </Categories>
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);


