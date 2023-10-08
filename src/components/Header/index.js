import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from 'react-router-dom';
import header from './header.module.scss';
import fvlLogo from '../../Image/Home/FVL_Logo.png'
import tplLogo from '../../Image/Home/TPL_Logo.png'

const MainLayout = () => {
  const navbarList = [
    {
      to: 'Home',
      name: 'Home',
    },
    {
      to: 'AboutUs',
      name: 'About Us',
    },
    {
      to: 'Outsourcing',
      name: 'Outsourcing'
    },
    {
      to: 'Solutions',
      name: 'Solutions',
    },
    {
      to: 'WorkFromHome',
      name: 'Work From Home',
    },
    {
      to: 'News',
      name: 'News',
    },
    {
      to: 'Careers',
      name: 'Careers',
    },
    {
      to: 'Contact',
      name: 'Contact',
    }
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid" >
          <div className={header.logo}>
            <NavLink to='/'><img src={fvlLogo} alt="Logo FVL" className={header.logoFVL} /></NavLink>
            <NavLink to='/'><img src={tplLogo} alt="Logo FVL" className={header.logoTPL} /></NavLink>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${header.navlist} ${"collapse navbar-collapse"}`} id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navbarList.map((navbarItem, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <NavLink to={navbarItem.to} className={({isActive}) => isActive ? `${header.active} ${"nav-link"}` : `${"nav-link"}`}> {/* Thêm lớp CSS noUnderline */}
                      {navbarItem.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainLayout;