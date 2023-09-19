import SidebarSolution from "../../SidebarSolution";
import { Outlet } from "react-router-dom";



const SolutionLayout = () => {
    return(
        <>
            <Outlet />
            <SidebarSolution />
        </>
    )

}

export default SolutionLayout;