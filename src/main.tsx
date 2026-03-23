import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@radix-ui/themes/styles.css";
import App from './App.tsx'

import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import Login from './pages/login.tsx';
import Signup from './pages/signup.tsx';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';

function AppWithAnimation() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme
      accentColor='cyan'
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
      <CartProvider>
        <BrowserRouter>
          <AppWithAnimation />
        </BrowserRouter>
      </CartProvider>
    </Theme>
  </StrictMode>,
)
