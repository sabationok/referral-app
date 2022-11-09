import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSignOutAction } from 'redux/auth/authAction';
import { selectUserData } from 'redux/selectors';
// import PropTypes from 'prop-types';

import css from './Layout.module.scss';
const Layout = ({ children }) => {
  const { isLoggedIn } = useSelector(selectUserData);

  const dispatch = useDispatch();

  function handleSignOut() {
    let isSignOut = window.confirm('Are you realy want to signOut?');
    isSignOut && dispatch(authSignOutAction());
  }

  return (
    <>
      <header className={css.header}>
        <Link className={css.logoLink} to="main">
          <span className={css.logoText}>L</span>
          <span className={css.logoText}>O</span>
          <span className={css.logoText}>G</span>
          <span className={css.logoText}>O</span>
        </Link>
        <div className={css.menuBox}>
          <button className={css.button} type="button">
            MENU
          </button>
          <ul className={css.navList}>
            <li>
              {!isLoggedIn && (
                <>
                  <NavLink
                    className={css.navLink}
                    to="signIn"
                    rel="noopener noreferrer"
                  >
                    Вхід
                  </NavLink>
                  <NavLink
                    className={css.navLink}
                    to="signUp"
                    rel="noopener noreferrer"
                  >
                    Реєстрація
                  </NavLink>
                </>
              )}
              {isLoggedIn && (
                <>
                  <NavLink
                    className={css.navLink}
                    to="main"
                    rel="noopener noreferrer"
                  >
                    Головна
                  </NavLink>
                  <button className={css.navLink} onClick={handleSignOut}>
                    Вихід
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </header>
      {children}
    </>
  );
};

Layout.propTypes = {};

export default Layout;
