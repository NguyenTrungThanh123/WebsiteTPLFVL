import WorkFromHome from "../pages/WorkFromHome";
import Home from "../pages/Home";
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
import AboutUsLayout from "../components/Layout/AboutUsLayout";
import AboutUsRouter from "../components/AboutUsRouter";

const  publicRoutes = [
    {path: '/', component: Home},
    {path: '/Home', component: Home},
    {path: '/AboutUs/OurCompanies', component: AboutUsRouter, layout: AboutUsLayout},
    {path: '/Outsourcing', component: Outsourcing},
    {path: '/Solutions', component: Solutions},
    {path: '/WorkFromHome', component: WorkFromHome},
    {path: '/News', component: News},
    {path: '/Careers', component: Careers},
    {path: '/Contact', component: Contact},    
    {path: '/AboutUs/PrivacyPolice', component: PrivacyPolice, },
   
];
const AboutUsRoutes = [
    {path: '/AboutUs/OurCompanies', component: OurCompanies, layout: AboutUsLayout},
    {path: '/AboutUs/OurCompanies', component: OurCompanies, layout: AboutUsLayout},
    {path: '/AboutUs/OurLeadershipTeam', component: OurLeadership, layout: AboutUsLayout},
    {path: '/AboutUs/OurAchievements', component:OurAchievements, layout: AboutUsLayout},
    {path: '/AboutUs/OurActivities', component: OurActivities, layout: AboutUsLayout},
    {path: '/AboutUs/OurCustomers', component: OurCustomers,layout: AboutUsLayout}
]
const  privateRoutes = [];

export  {publicRoutes, privateRoutes,AboutUsRoutes} 


