import { lazy } from "react";

const Home = lazy(() => import("../../components/Home"));
const SellerDashboard = lazy(() =>
  import("../../components/seller/SellerDashboard")
);
const AddProduct = lazy(() => import("../../components/seller/AddProduct"));
const Products = lazy(() => import("../../components/seller/Products"));
const Orders = lazy(() => import("../../components/seller/Orders"));
const Payments = lazy(() => import("../../components/seller/Payments"));
const Profile = lazy(() => import("../../components/seller/Profile"));
const SellerToCustomer = lazy(() =>
  import("../../components/seller/SellerToCustomer")
);
const ChatSupport = lazy(() => import("../../components/seller/ChatSupport"));

export const sellerRoutes = [
  {
    path: "/",
    element: <Home></Home>,
    ability: ["admin", "seller"], //who can access this routes
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard></SellerDashboard>,
    ability: ["seller"], //who can access this routes
  },
  {
    path: "/seller/dashboard/addProduct",
    element: <AddProduct></AddProduct>,
    ability: ["seller"], //who can access this routes
  },
  {
    path: "/seller/dashboard/allProduct",
    element: <Products></Products>,
    ability: ["seller"], //who can access this routes
  },
  {
    path: "/seller/dashboard/Orders",
    element: <Orders></Orders>,
    ability: ["seller"], //who can access this routes
  },
  {
    path: "/seller/dashboard/payments",
    element: <Payments></Payments>,
    ability: ["seller"], //who can access this routes
  },
  {
    path: "/seller/dashboard/profile",
    element: <Profile></Profile>,
    ability: ["seller"], //who can access this routes
  },
  {
    path: "/seller/dashboard/chatCustomers",
    element: <SellerToCustomer></SellerToCustomer>,
    ability: ["seller"], //who can access this routes
  },
  {
    path: "/seller/dashboard/chatSupport",
    element: <ChatSupport></ChatSupport>,
    ability: ["seller"], //who can access this routes
  },
];
