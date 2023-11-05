import { Routes as AppRoutes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import Signin from "../pages/Signin";
import { ShoppingCart } from "../pages/ShoppingCart";

// const PATH = import.meta.env.VITE_PATH;

export default function Routes() {
  return (
    <AppRoutes>
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
    </AppRoutes>
  );
}
