import Sidebar from "../../SidebarOutsourcing";
import { Outlet } from "react-router-dom";



const outsourcLayout = () => {
    return(
        <>
            <Outlet />
            <Sidebar />
        </>
    )

}

export default outsourcLayout;