import {Routes, Route, Outlet, NavLink } from "react-router-dom";
import { AboutUsRoutes } from "../../routes";
import DefaultLayout from "../../components/Layout/DefaultLayout";
const AboutUs = () => {
        const aboutUslist = [
                                {to: '/AboutUs/OurCompanies', name: 'Our Companies'},
                                {to: '/AboutUs/OurLeadershipTeam', name: 'Our Leadership Team'},
                                {to: '/AboutUs/OurAchievements', name: 'Our Achievements'},
                                {to: '/AboutUs/OurActivities', name: 'Our Activities'},
                                {to: '/AboutUs/OurCustomers', name: 'Our Customers'}
                            ];
        return (
                <>
                    <ul>
                        {
                            aboutUslist.map((AboutUsItem,index) => {
                                return (
                                    <li key={index}><NavLink to={AboutUsItem.to}>{AboutUsItem.name}</NavLink></li>
                                )
                            })
                        }
                    </ul>
                   
                    <Routes>
                            {AboutUsRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Page = route.component;
                        <h2> Ahihi</h2>
                        return (
                            
                            <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />  
                        );
                        })}
                       

                    </Routes>
                    <Outlet />
                </>
        )

}

export default AboutUs;