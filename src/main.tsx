import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@radix-ui/themes/styles.css";
import App from './App.tsx'

import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/login.tsx';
import Signup from './pages/signup.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme
      accentColor='jade'
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  </StrictMode>,
)
