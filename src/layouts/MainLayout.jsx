import React from 'react';
import { Outlet } from 'react-router-dom';

// Layout Components
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../tools/ScrollToTop';

const MainLayout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
