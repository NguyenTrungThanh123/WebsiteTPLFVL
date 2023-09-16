import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Outlet } from "react-router-dom";
import AboutUsNav from "../../AboutUsNav";

const AboutUsLayout = () => {
    return (
        <>
        <AboutUsNav />
                <Outlet />
        </>
    )
}
export default AboutUsLayout;