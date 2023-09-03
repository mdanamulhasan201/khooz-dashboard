import { lazy } from "react";
const Home = lazy(() => import("../../components/Home"));
const Login = lazy(() => import("../../components/auth/Login"));
const Register = lazy(() => import("../../components/auth/Register"));
const AdminLogin = lazy(() => import("../../components/auth/AdminLogin"));
const UnAuthorized = lazy(() =>
  import("../../components/Unauthorized/UnAuthorized")
);

const publicRoutes = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/admin/login",
    element: <AdminLogin></AdminLogin>,
  },
  {
    path: "/unauthorized",
    element: <UnAuthorized></UnAuthorized>,
  },
];

export default publicRoutes;
