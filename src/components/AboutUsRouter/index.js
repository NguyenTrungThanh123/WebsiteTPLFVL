// Routes.js
import React from 'react';
import {Routes, Route, NavLink,Outlet } from 'react-router-dom';
import DefaultLayout from '../Layout/DefaultLayout';
import { AboutUsRoutes } from '../../routes';
import aboutusRouter from './aboutusRouter.module.scss';
const AboutUsRouter = () => {

  const linklist = [
                  {to: '/AboutUs/OurCompanies', name: 'Our Companies',},
                  {to: '/AboutUs/OurLeadershipTeam', name: 'Our Leadership Team',},
                  {to: '/AboutUs/OurAchievements', name: 'Our Achievements',},
                  {to: '/AboutUs/OurActivities', name: 'Our Activities',},
                  {to: '/AboutUs/OurCustomers', name: 'Our Customers'}
             ];
  return (
    <>
       <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              
                {linklist.map((linkItem, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <div className={aboutusRouter.navlist}> 
                      <NavLink to={linkItem.to} className="nav-link"> {/* Thêm lớp CSS noUnderline */}
                        {linkItem.name}
                      </NavLink>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </nav>
       <Routes>
        {AboutUsRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            console.log(Page)
            return (
              <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
            );
          })}
       </Routes>
      
      <Outlet />
    </>
  );
};

export default AboutUsRouter;
