import { lazy } from "react";
const AdminDashboard = lazy(() => import("../../components/admin/AdminDashboard"));
const Orders = lazy(() => import("../../components/admin/Orders"));
const Category = lazy(() => import("../../components/admin/Category"));

export const adminRoutes = [
  {
    path: 'admin/dashboard',
    element: <AdminDashboard />,
    role: 'admin'
  },
  {
    path: '/admin/dashboard/orders',
    element: <Orders></Orders>,
    role: 'admin'
  },
  {
    path: '/admin/dashboard/category',
    element: <Category></Category>,
    role: 'admin'
  },
];
