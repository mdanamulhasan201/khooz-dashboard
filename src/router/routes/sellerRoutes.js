import { lazy } from "react";
const Home = lazy(() => import("../../components/Home"));

export const sellerRoutes = [
  {
    path: "/",
    element: <Home></Home>,
    ability: ["admin", "seller"], //who can access this routes
  },
];
