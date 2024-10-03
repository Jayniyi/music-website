import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from "./routes/about.jsx";
import Track from "./routes/tracl.jsx";
import Contact from "./routes/contact.jsx";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  {path: "/tracl", element: <Track />},
  {path: "/contact", element: <Contact />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
