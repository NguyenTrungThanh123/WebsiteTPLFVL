import WorkFromHome from "../pages/WorkFromHome";
import Home from "../pages/Home";
import AboutUs from "../components/Navigation/AboutUs";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import News from "../pages/News";
import Outsourcing from "../pages/Outsourcing";
import Solutions from "../pages/Solutions";
import PrivacyPolice from "../pages/PrivacyPolicy";
import OurCompanies from "../pages/AboutUs/OurCompanies";
import OurLeadership from "../pages/AboutUs/OurLeadership";
import OurAchievements from "../pages/AboutUs/OurAchievements";
import OurActivities from "../pages/AboutUs/OurActivities";
import OurCustomers from "../pages/AboutUs/OurCustomers";



const  publicRoutes = [
    {path: '/', component: Home},
    {path: '/Home', component: Home},
    {path: '/AboutUs/*', component: AboutUs},
    {path: '/Outsourcing', component: Outsourcing},
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
]
const  privateRoutes = [];

export  {publicRoutes, privateRoutes,AboutUsRoutes} 


