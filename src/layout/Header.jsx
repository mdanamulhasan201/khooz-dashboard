import { FaList } from "react-icons/fa";

const Header = ({ shadowSidebar, setShowSidebar }) => {

    return (
        <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40 ">
            <div className="ml-0 lg:ml-[260px] rounded-md h-[65px]  flex justify-around items-center bg-[#F8F5FF] shadow-md text-black px-5 transition-all">
                {/* anonimas callback functions */}
                <div onClick={() => setShowSidebar(!shadowSidebar)} className="w-[35px] flex lg:hidden h-[35px] text-white rounded-sm bg-black shadow-lg hover:shadow-slate-800/50 justify-center items-center ">
                    <span><FaList></FaList></span>
                </div>

                <div>
                <span className="md:text-xl ms-2 font-semibold">Admin Dashboard</span>
                </div>
                <div className="flex justify-center items-center gap-8 relative">
                    <div className="flex justify-center items-center  ">
                        <div className="flex justify-center items-center gap-3">
                            <div className="flex justify-center items-center flex-col text-end">
                                <h2 className="text-sm font-semibold">Anamul Hasan</h2>
                                <span className="text-[14px] w-full font-normal">Admin</span>
                            </div>
                            <img className="w-12 h-12 border overflow-hidden border-green-500 rounded-full" src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="" />
                            
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Header;