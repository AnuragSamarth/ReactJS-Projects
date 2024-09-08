import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import theme from '../theam.js'
import Shows from './Pages/shows/Shows.jsx'
import Search from './Pages/search/Search.jsx'
import Movies from './Pages/movies/Movies.jsx'
import Home from './Pages/Home.jsx'

const router = createBrowserRouter([
   {
    path: "/",
    element: <App/>,
    children : [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: "/movies",
        element: <Movies/>
      },
      {
        path: "/shows",
        element: <Shows/>
      },
      {
          path: "/search",
          element: <Search/>
      }
    ]
   },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider initialColorMode={theme.config. initialColorMode}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
)
