import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Main from "./Layout/Main";
import AuthProvider from "./contexts/AuthProvider";
import ProductProvider from "./contexts/ProductProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  { path: "/product/:id", element: <ProductDetails></ProductDetails> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </ProductProvider>
);
