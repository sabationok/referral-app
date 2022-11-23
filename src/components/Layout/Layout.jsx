import React from 'react';
import Header from './Header/Header';
import { MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import MobileNavMenu from 'components/Layout/MobileNavMenu/MobileNavMenu';
// import PropTypes from 'prop-types';

// import css from './Layout.module.scss';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <div className="container">{children}</div> */}
      <MaxToTablet>
        <MobileNavMenu />
      </MaxToTablet>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
