import React from 'react';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Settings from '../Settings/Settings';

import './Core.scss';
import './LayoutVariants.scss';

const Core = ({ children }) => (
  <div className="layout-container">
    <Header />
    <Sidebar />
    <Settings/>

    <div className="sidebar-layout-obfuscator" />

    <main className="main-container">
      { children }

      <footer className="footer">
        <span>2020 - Product Hired Admin</span>
      </footer>
    </main>
  </div>
);

export default Core;
