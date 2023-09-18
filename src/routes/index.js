import WorkFromHome from "../pages/WorkFromHome";
import Home from "../pages/Home";
import AboutUsNav from "../components/Navigation/AboutUsNav";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import News from "../pages/News";
import OutsourcingNav from "../components/Navigation/OutsourcingNav";
import Solutions from "../pages/Solutions";
import PrivacyPolice from "../pages/PrivacyPolicy";
import OurCompanies from "../pages/AboutUs/OurCompanies";
import OurLeadership from "../pages/AboutUs/OurLeadership";
import OurAchievements from "../pages/AboutUs/OurAchievements";
import OurActivities from "../pages/AboutUs/OurActivities";
import OurCustomers from "../pages/AboutUs/OurCustomers";
import AdvantageOutsourcing from "../pages/Outsourcing/AdvantageOutsourcing";
import Faqs from "../pages/Outsourcing/FaqsOutsourcing"
import Tips from  "../pages/Outsourcing/TipsOutsourcing"
import OutsourcingPage from "../pages/Outsourcing/OutsourcingPage"

const  publicRoutes = [
    {path: '/', component: Home},
    {path: '/Home', component: Home},
    {path: '/AboutUs/*', component: AboutUsNav},
    {path: '/Outsourcing/*', component: OutsourcingNav},
    {path: '/Solutions', component: Solutions},
    {path: '/WorkFromHome', component: WorkFromHome},
    {path: '/News', component: News},
    {path: '/Careers', component: Careers},
    {path: '/Contact', component: Contact},    
    {path: '/PrivacyPolice', component: PrivacyPolice, },
];
const AboutUsRoutes = [
    {path: '/', component: OurCompanies, },
    {path: '/OurCompanies', component: OurCompanies, },
    {path: '/OurLeadershipTeam', component: OurLeadership, },
    {path: '/OurAchievements', component:OurAchievements, },
    {path: '/OurActivities', component: OurActivities, },
    {path: '/OurCustomers', component: OurCustomers,}
];
const OutsourcingRoutes = [
    {path: '/', component: OutsourcingPage, },
    {path: '/Outsourcing', component: OutsourcingPage, },
    {path: '/Advantage', component: AdvantageOutsourcing, },
    {path: '/Faqs', component:Faqs, },
    {path: '/Tips', component: Tips, },
]
const  privateRoutes = [];

export  {publicRoutes, privateRoutes,AboutUsRoutes, OutsourcingRoutes} 


