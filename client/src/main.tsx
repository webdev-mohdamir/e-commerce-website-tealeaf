import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Navbar } from './components/navbar/navbar.tsx'
import { CartProvider } from './context/cart/CartContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <Navbar />
      <App />
    </CartProvider>
  </React.StrictMode>,
)
