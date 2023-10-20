import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getNavs } from '../navigation/index'
import { BiLogInCircle } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../store/Reducers/authReducer";
import logo from '../assets/logo.png'

const SideBar = ({ shadowSidebar, setShowSidebar }) => {
    const { role } = useSelector(state => state.auth)
    const { pathname } = useLocation()
    const [allNav, setAllNav] = useState([])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const navs = getNavs(role)
        setAllNav(navs)
    }, [role])

    return (
        <div >
            <div onClick={() => setShowSidebar(false)} className={`fixed duration-200 ${!shadowSidebar ? "invisible" : 'visible'} w-screen h-screen bg-[#22292f80] top-0 left-0 z-10`}></div>
            <div className={`w-[260px] fixed bg-[#F8F5FF] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/5%)] transition-all ${shadowSidebar ? 'left-0' : '-left-[260px] lg:left-0'}`}>
                <div className="h-[70px] flex justify-center items-center my-8">
                    <Link to='/'>
                        <img  className="w-48 h-20" src={logo} alt="" />
                    </Link>
                </div>
                <div className="px-[16px]">
                    <ul>
                        {
                            allNav.map((n, i) => <li key={i}>
                                <Link to={n.path} className={`${pathname === n.path ? 'bg-black shadow-indigo-500/30 text-white duration-500' : "text-[#28292a] font-normal duration-200"} px-[12px] py-[9px] rounded-md flex justify-start items-center gap-[12px] hover:p-l4 transition-all w-full mb-1 `}>
                                    <span className="text-lg">{n.icon}</span>
                                    <span className="text-lg">{n.title}</span>
                                </Link>
                            </li>)
                        }
                        <li>
                            <button onClick={() => dispatch(logout({ navigate, role }))} className="text-lg text-[#28292a] font-normal duration-200 px-[12px] py-[9px] rounded-md flex justify-start items-center gap-[12px] hover:p-l4 transition-all w-full mb-1">
                                <span>
                                    <BiLogInCircle></BiLogInCircle>
                                </span>
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default SideBar;