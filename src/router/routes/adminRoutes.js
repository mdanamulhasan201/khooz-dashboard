import { lazy } from "react";
const AdminDashboard = lazy(() =>
  import("../../components/admin/AdminDashboard")
);
const Orders = lazy(() => import("../../components/admin/Orders"));
const Category = lazy(() => import("../../components/admin/Category"));
const Sellers = lazy(() => import("../../components/admin/Sellers"));

const AdminPaymentRequest = lazy(() =>
  import("../../components/admin/PaymentRequest")
);
const SellerRequest = lazy(() =>
  import("../../components/admin/SellerRequest")
);
const DeactiveSellers = lazy(() =>
  import("../../components/admin/DeactiveSellers")
);

export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "/admin/dashboard/orders",
    element: <Orders></Orders>,
    role: "admin",
  },
  {
    path: "/admin/dashboard/category",
    element: <Category></Category>,
    role: "admin",
  },
  {
    path: "/admin/dashboard/sellers",
    element: <Sellers></Sellers>,
    role: "admin",
  },
  {
    path: "/admin/dashboard/paymentRequest",
    element: <AdminPaymentRequest></AdminPaymentRequest>,
    role: "admin",
  },
  {
    path: "/admin/dashboard/deactivateSellers",
    element: <DeactiveSellers></DeactiveSellers>,
    role: "admin",
  },
  {
    path: "/admin/dashboard/sellerRequest",
    element: <SellerRequest></SellerRequest>,
    role: "admin",
  },
];