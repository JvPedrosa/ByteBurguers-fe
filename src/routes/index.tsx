import { Routes as AppRoutes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

// const PATH = import.meta.env.VITE_PATH;

interface RoutesProps {
  viewCart: boolean;
}

export default function Routes({ viewCart }: RoutesProps) {
  return (
    <AppRoutes>
      <Route path="*" element={<Home viewCart={viewCart} />} />
    </AppRoutes>
  );
}
