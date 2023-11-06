import { Routes as AppRoutes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import Signin from "../pages/Signin";
import { ShoppingCart } from "../pages/ShoppingCart";
import { Signup } from "../pages/Signup";
import { Account } from "../pages/Account";
import UserList from "../pages/UserList";

export default function Routes() {
  return (
    <AppRoutes>
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="/account" element={<Account />} />
      <Route path="/user-list" element={<UserList />} />
    </AppRoutes>
  );
}
