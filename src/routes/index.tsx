import { Routes as AppRoutes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

const PATH = import.meta.env.VITE_PATH;

export default function Routes() {
  return (
    <AppRoutes>
      <Route path="*" element={<Home />} />
    </AppRoutes>
  );
}
