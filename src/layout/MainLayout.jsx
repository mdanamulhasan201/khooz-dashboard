

import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";

const MainLayout = () => {
    const [shadowSidebar, setShowSidebar] = useState(false)
    return (
        <div className="bg-[ #C1EBF91A] w-full min-h-screen">

            <Header shadowSidebar={shadowSidebar} setShowSidebar={setShowSidebar}></Header>
            <SideBar shadowSidebar={shadowSidebar} setShowSidebar={setShowSidebar}></SideBar>
            <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;