import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../widgets/WhatsAppButton';
import ScrollToTop from '../common/ScrollToTop';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <Navbar />
      {children}
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Layout; 