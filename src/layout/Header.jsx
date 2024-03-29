import { FaList } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = ({ shadowSidebar, setShowSidebar }) => {
    const { userInfo } = useSelector(state => state.auth)
    return (
        <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40 ">
            <div className="ml-0 lg:ml-[260px] rounded-md h-[65px]  flex justify-between items-center bg-[#F8F5FF] shadow-md text-black px-5 transition-all">
                {/* anonimas callback functions */}
                <div onClick={() => setShowSidebar(!shadowSidebar)} className="w-[35px] flex lg:hidden h-[35px] text-white rounded-sm bg-black shadow-lg hover:shadow-slate-800/50 justify-center items-center ">
                    <span><FaList></FaList></span>
                </div>

                <div>
                <span className="md:text-xl ms-2 font-semibold uppercase">{userInfo.role} Dashboard</span>
                </div>
                <div className="flex justify-center items-center gap-8 relative">
                    <div className="flex justify-center items-center  ">
                        <div className="flex justify-center items-center gap-3">
                            <div className="flex justify-center items-end flex-col text-end">
                                <h2 className="text-sm font-semibold">{userInfo.name}</h2>
                                <h2 className="text-sm ">{userInfo.role}</h2>
                             
                            </div>
                            <img className="w-12 h-12 border overflow-hidden border-green-500 rounded-full" src={userInfo.image} alt="" />
                            
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Header;