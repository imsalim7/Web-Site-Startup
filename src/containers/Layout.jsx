import React from 'react';
import { useLocation } from 'react-router-dom';


import Navbar from "../components/Navbar";
import Dropdown from '../pages/Dropdown';
//this for getstaered display dropd down and dont display navbar
const Layout = ({ children }) => {
  const location = useLocation();
  const noNavbarPath = '/getstarted';
  return (
    <>
    {location.pathname === noNavbarPath ? (
      <Dropdown />
    ) : (
      <Navbar />
    )}
    {children}
  </>
  );
};

export default Layout;