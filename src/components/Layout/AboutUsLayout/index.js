import Footer  from "../../Footer";
import AboutUsRouter from "../../../components/AboutUsRouter";
const AboutUsLayout = (children) => {
    return (
        <>
           
            <div className="content">
                {children}
            </div>
            <Footer />
            
        </>

    )
}

export default AboutUsLayout;