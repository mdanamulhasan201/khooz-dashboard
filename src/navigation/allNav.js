// customer and admin er list item (nav item ache shey gula thakbe)
import { AiFillDashboard, AiOutlineShopping } from "react-icons/ai";
import { BiCategory, BiLoaderCircle } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";

export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: <AiFillDashboard></AiFillDashboard>,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: <AiOutlineShopping></AiOutlineShopping>,
    role: "admin",
    path: "/admin/dashboard/orders",
  },

  {
    id: 3,
    title: "Added Category",
    icon: <BiCategory></BiCategory>,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "Sellers List",
    icon: <FiUser></FiUser>,
    role: "admin",
    path: "/admin/sellers",
  },
  {
    id: 5,
    title: "Payment Request",
    icon: <BsCurrencyDollar></BsCurrencyDollar>,
    role: "admin",
    path: "/admin/paymentRequest",
  },
  {
    id: 6,
    title: "Seller Request",
    icon: <BiLoaderCircle></BiLoaderCircle>,
    role: "admin",
    path: "/admin/sellerRequest",
  },
  {
    id: 7,
    title: "Deactivate Sellers",
    icon: <FiUser></FiUser>,
    role: "admin",
    path: "/admin/deactivateSellers",
  },

  {
    id: 8,
    title: "Provider Request",
    icon: <BiLoaderCircle></BiLoaderCircle>,
    role: "admin",
    path: "/admin/provideRequest",
  },
  {
    id: 9,
    title: "Chat Seller",
    icon: <CiChat1></CiChat1>,
    role: "admin",
    path: "/admin/chatSellers",
  },
];
