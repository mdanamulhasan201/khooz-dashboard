import { lazy } from "react";

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
const EditProduct = lazy(() => import("../../components/seller/EditProduct"));
const ChatSupport = lazy(() => import("../../components/seller/ChatSupport"));
const SlrOrderDetails = lazy(() =>
  import("../../components/seller/SlrOrderDetails")
);
const Pending = lazy(() => import("../../components/pending/Pending"));
const Deactive = lazy(() => import("../../components/deactive/Deactive"));

export const sellerRoutes = [
  {
    path: "/seller/account-pending",
    element: <Pending></Pending>,
    ability: "seller",
  },
  {
    path: "/seller/account-deactive",
    element: <Deactive></Deactive>,
    ability: "seller",
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard></SellerDashboard>,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/addProduct",
    element: <AddProduct></AddProduct>,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/allProduct",
    element: <Products></Products>,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/EditProduct/:productId",
    element: <EditProduct></EditProduct>,
    role: "seller",
    status: "active",
  },

  {
    path: "/seller/dashboard/Orders",
    element: <Orders></Orders>,
    role: "seller", //who can access this routes
    visibility: ["active", "deactive"],
  },
  {
    path: "/seller/dashboard/orders/details/:orderId",
    element: <SlrOrderDetails></SlrOrderDetails>,
    role: "seller", //who can access this routes
    visibility: ["active", "deactive"],
  },
  {
    path: "/seller/dashboard/payments",
    element: <Payments></Payments>,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/profile",
    element: <Profile></Profile>,
    role: "seller",
    status: "active", //who can access this routes
  },
  {
    path: "/seller/dashboard/chatCustomers/:customerId",
    element: <SellerToCustomer></SellerToCustomer>,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chatCustomers",
    element: <SellerToCustomer></SellerToCustomer>,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chatSupport",
    element: <ChatSupport></ChatSupport>,
    visibility: ["active", "deactive", "pending"],
    role: "seller",
  },
];
