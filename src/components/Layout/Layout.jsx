import React from 'react';
import Header from './Header/Header';
// import PropTypes from 'prop-types';

// import css from './Layout.module.scss';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
