import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import router from './Router/Router.jsx'
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>

    <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
