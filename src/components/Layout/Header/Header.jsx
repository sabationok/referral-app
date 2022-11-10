import React from 'react';

import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSignOutAction } from 'redux/auth/authAction';
import { selectUserData } from 'redux/selectors';

import UserInfo from '../UserInfo/UserInfo';

import css from './Header.module.scss';
const Header = () => {
  const { isLoggedIn, user, admin } = useSelector(selectUserData);

  const dispatch = useDispatch();

  function handleSignOut() {
    let isSignOut = window.confirm('Are you realy want to signOut?');
    isSignOut && dispatch(authSignOutAction());
  }

  return (
    <header className={css.header}>
      <Link className={css.logoLink} to="main">
        <span className={css.logoText}>L</span>
        <span className={css.logoText}>O</span>
        <span className={css.logoText}>G</span>
        <span className={css.logoText}>O</span>
      </Link>
      {isLoggedIn && (
        <div className={css.userInfo}>
          <span className={css.userName}>
            Wellcome! {user?.name}{' '}
            <span className={css.userId}>{`(id: ${user?.id})`}</span>
          </span>
        </div>
      )}
      <div className={css.menuBox}>
        <button className={css.button} type="button">
          MENU
        </button>
        <ul className={css.navList}>
          {isLoggedIn && <UserInfo />}

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
                {admin.isAdmin && (
                  <NavLink
                    className={css.navLink}
                    to="admin"
                    rel="noopener noreferrer"
                  >
                    Адмін
                  </NavLink>
                )}
                <button className={css.navLink} onClick={handleSignOut}>
                  Вихід
                </button>
              </>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
