import OurCustomersStyle from "./OurCustomers.module.scss";
import spotlight from "../../../Image/AboutUs/Our_Customers/spotlight.jpg"
import logoAccessNurses from "../../../Image/AboutUs/Our_Customers/logo_client_access_nurses.jpg"
import logoBuilderdepot from "../../../Image/AboutUs/Our_Customers/logo_client_builderdepot.jpg"
import logoDebnroo from "../../../Image/AboutUs/Our_Customers/logo_client_debnroo.jpg"
import logoerei from "../../../Image/AboutUs/Our_Customers/logo_client_erei.jpg"
import logoSfile from "../../../Image/AboutUs/Our_Customers/logo_client_sfile.jpg"
import logoTherabreath from "../../../Image/AboutUs/Our_Customers/logo_client_therabreath.jpg"
import {faQuoteLeft,faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const OurCustomers = () => {

    const OurCustomersSayList = [
        { 
            content: "As much as our data processing work requires a fair degree of analysis beyond rudimentary data processing and is document intensive, we are pleased that your highly educated team could manage the high level analytics required of them in comprehending, summarizing, and categorizing the data that they had to process. Together, we are delivering quality professional legal services while facilitating the demanding needs of our clients and economic value on a global scale.",
            author : "Frank D. Perez, President and CEO Sfile LLC",
            urlImage : logoSfile,
        },
        { 
            content: "The work that your team is working on for us is not an easy task. They were able to overcome the many challenges of comprehending the commercial real estate industry and read through hundreds of commercial real estate articles published worldwide and still deliver high quality data each and every time. Their determination, hard-work and research skills have shined through the quality of their work.",
            author : "Institutional Real Estate, Inc.",
            urlImage : logoerei,
        },
        { 
            content: "At first thought, it seems sort of strange to mail all our inbound printed leads to Vietnam, but it has turned out to be a HUGE benefit! Honestly, data entry is something that I don't even think about anymore, it just happens automatically, and that is a sure sign that you are doing something right!",
            author : "Mark Fiala, VP Operations Therabreath",
            urlImage : logoTherabreath,
        },
        { 
            content: " By utilizing FVL & TPL, we were able to scale portions of our business much faster than if we were to have attempted the support work on our own. The FVL & TPL team provides efficient, consistent, and high-quality work. No matter what project we have thrown at them, the deliverable has always met the highest standards and results were produced in an exceedingly timely manner.",
            author : "Collin J. Tyler, Corporate Development Access Nurses, Inc.",
            urlImage : logoAccessNurses,
        },
        { 
            content: "Interactions are friendly and professional, and we have access to those at FVL & TPL via Skype, AIM, email, and landline phone. We never have trouble reaching our partners at FVL & TPL, and they are available at hours convenient to us. But, the most important aspect of their services we value is their reliability. We can count on our tasks and projects to be completed on time, and for the results to be accurately checked for error.",
            author : "Andrew Mowery, Presidentdebnroo, inc.",
            urlImage : logoDebnroo,
        },
        { 
            content: "BuilderDepot is an online retailer selling over 200,000 products. We needed additional help to manage the ever growing demands to update products, inventory, pricing, and images. We selected First Virtue LLC and Transcend People LLC as they offered us an excellent value, robust performance and professional work ethics.",
            author : "Zak Zacharia, President BuilderDepot, Inc.",
            urlImage : logoBuilderdepot,
        },
    ]

    return (
        <>
            <div> 
                <div className={OurCustomersStyle.title}>
                Our clients have experienced the FVL & TPL advantage - and they've got a lot to share. Here's a sampling of testimonials from our clients:
                </div>
                <img src={spotlight} alt= "spotlight" />
            </div>
            {
                OurCustomersSayList.map((item,index) => {
                    return (
                       <>
                            <div className={OurCustomersStyle.content}>
                               <FontAwesomeIcon icon={faQuoteLeft}/>{item.content}<FontAwesomeIcon icon={faQuoteRight}/>
                            </div>
                            <div className={OurCustomersStyle.author}>{item.author}</div>
                            <img src={item.urlImage} alt={item.urlImage}/>
                       </>
                    )
                })
            }

        </>
    )
}

export default OurCustomers;