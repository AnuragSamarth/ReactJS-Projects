import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import { Provider } from "react-redux";
import store from "./store.jsx";
import CategoryList from "./pages/CategoryList.jsx";
import CategoryProdycts from "./pages/CategoryProducts.jsx";
import CategoryProductDetail from "./pages/CategoryProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category-list",
        element: <CategoryList />
      },
      {
        path: "/category-products",
        element: <CategoryProdycts />
      },
      {
        path: "/category-product-detail/:id",
        element: <CategoryProductDetail />
      },
      {
        path: "/product-detail/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
