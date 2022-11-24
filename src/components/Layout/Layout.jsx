import React from 'react';
import Header from './Header/Header';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import { MaxToTablet } from 'components/DeviceTypeInformer/DeviceTypeController';
import MobileNavMenu from 'components/Layout/MobileNavMenu/MobileNavMenu';
// import PropTypes from 'prop-types';

// import s from './Layout.module.scss';
const Layout = ({ children }) => {
  const { isLoggedIn} = useSelector(selectUserData);

  return (
    <>
      <Header />
      {children}
      {/* <div className="container">{children}</div> */}
      {isLoggedIn && (
        <MaxToTablet>
          <MobileNavMenu />
        </MaxToTablet>
      )}
    </>
  );
};

Layout.propTypes = {};

export default Layout;
