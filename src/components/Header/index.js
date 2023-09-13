import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route, Outlet, NavLink } from 'react-router-dom';
import { publicRoutes } from '../../routes';
import DefaultLayout from '../Layout/DefaultLayout';
import header from './header.module.scss';
import fvlLogo from '../../Image/Home/FVL_Logo.png'
import tplLogo from '../../Image/Home/TPL_Logo.png'

const Header = () => {
  const navbarList = [
                      {to: 'Home',
                      name: 'Home',},
                      {to: 'AboutUs',
                      name: 'About Us',},
                      {to: 'Outsourcing',
                      name: 'Outsourcing'},
                      {to: 'Solutions',
                      name: 'Solutions',},
                      {to: 'WorkFromHome',
                      name: 'Work From Home',},
                      {to: 'News',
                      name: 'News',},
                      {to: 'Careers',
                      name: 'Careers',},
                      {to: 'Contact',
                      name: 'Contact',}
                    ];
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="col-lg-3">
            <NavLink to='/'><img src={fvlLogo} alt="Logo FVL" className={header.logoFVL} /></NavLink>
            <NavLink to='/'><img src={tplLogo} alt="Logo FVL" className={header.logoTPL} /></NavLink>
          </div>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              
                {navbarList.map((navbarItem, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <div className={header.navlist}> 
                      <NavLink to={navbarItem.to} className="nav-link"> {/* Thêm lớp CSS noUnderline */}
                        {navbarItem.name}
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
        {publicRoutes.map((route, index) => {
          const Layout = route.layout || DefaultLayout;
          const Page = route.component;
          return (
            <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          );
        })}
      </Routes>
      <Outlet />
   </>
  );
};

export default Header;