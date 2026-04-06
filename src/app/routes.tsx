import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "about", Component: About },
      { path: "cart", Component: Cart },
      { path: "contact", Component: Contact },
      
      /* This wild-card route handles the "No routes matched" warning.
        It redirects any unknown paths (like the old /gallery) back to home.
      */
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);