import Footer  from "../../Footer";
import Header from "../../Header";
const AboutUsLayout = ({children}) => {
    return (
        <>
           
                <div className="content">
                    <div>{children}</div>
                </div>
            <Footer />
        </>

    )
}

export default AboutUsLayout;
