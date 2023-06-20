import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Main from "./Layout/Main";
import ProductProvider from "./contexts/ProductProvider";
import SidebarProvider from "./contexts/SidebarProvider";
import CartProvider from "./contexts/CartProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  { path: "/product/:id", element: <ProductDetails></ProductDetails> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <SidebarProvider>
      <ProductProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </ProductProvider>
    </SidebarProvider>
  </CartProvider>
);
