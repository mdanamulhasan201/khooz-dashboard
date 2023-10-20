// customer and admin er list item (nav item ache shey gula thakbe)
import { AiFillDashboard, AiOutlineShopping, AiOutlinePlus } from "react-icons/ai";
import { BiCategory, BiLoaderCircle } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { BsCurrencyDollar, BsChat } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";

export const allNav = [
  {
    // admin dashboard start
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
    title: "Active Sellers",
    icon: <FiUser></FiUser>,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    title: "Deactivate Sellers",
    icon: <FiUser></FiUser>,
    role: "admin",
    path: "/admin/dashboard/deactivateSellers",
  },
  {
    id: 6,
    title: "Payment Request",
    icon: <BsCurrencyDollar></BsCurrencyDollar>,
    role: "admin",
    path: "/admin/dashboard/paymentRequest",
  },
  {
    id: 7,
    title: "Seller Request",
    icon: <BiLoaderCircle></BiLoaderCircle>,
    role: "admin",
    path: "/admin/dashboard/sellerRequest",
  },
  
  {
    id: 8,
    title: "Chat Seller",
    icon: <CiChat1></CiChat1>,
    role: "admin",
    path: "/admin/dashboard/chatSellers",
  },
  // end

  // Seller dashboard navbar start
  {
    id: 9,
    title: "Dashboard",
    icon: <AiFillDashboard></AiFillDashboard>,
    role: "seller",
    path: "/seller/dashboard",
  },
  {
    id: 10,
    title: "Add Product",
    icon: <AiOutlinePlus></AiOutlinePlus>,
    role: "seller",
    path: "/seller/dashboard/addProduct",
  },
  {
    id: 11,
    title: "All Product",
    icon: <MdProductionQuantityLimits></MdProductionQuantityLimits>,
    role: "seller",
    path: "/seller/dashboard/allProduct",
  },
  {
    id: 12,
    title: "Orders",
    icon: <AiOutlineShopping></AiOutlineShopping>,
    role: "seller",
    path: "/seller/dashboard/Orders",
  },
  {
    id: 13,
    title: "Payments",
    icon:<BsCurrencyDollar></BsCurrencyDollar>,
    role: "seller",
    path: "/seller/dashboard/payments",
  },
  {
    id: 14,
    title: "Profile",
    icon: <FiUser></FiUser>,
    role: "seller",
    path: "/seller/dashboard/profile",
  },
  {
    id: 15,
    title: "Chat Customers",
    icon: <BsChat></BsChat>,
    role: "seller",
    path: "/seller/dashboard/chatCustomers",
  },
 
  {
    id: 16,
    title: "Chat Support",
    icon: <CiChat1></CiChat1>,
    role: "seller",
    path: "/seller/dashboard/chatSupport",
  },
 
];
