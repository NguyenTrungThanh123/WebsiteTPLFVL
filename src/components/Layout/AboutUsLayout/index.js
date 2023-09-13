import { Outlet } from "react-router-dom";
import AboutUsNav from "../../AboutUsNav";

const AboutUsLayout = () => {
    return (
        <>
            <h1>AboutUS</h1>
            <AboutUsNav />
            <Outlet />
        </>
    )
}
export default AboutUsLayout;