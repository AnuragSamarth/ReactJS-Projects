import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Shows from './pages/Shows.jsx';
import DetailMovie from './pages/DetailMovie.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/shows",
        element: <Shows/>
      },
      {
        path: "/:time_window/:type/:id",
        element: <DetailMovie />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <RouterProvider router={router}/>
  </StrictMode>,
)
