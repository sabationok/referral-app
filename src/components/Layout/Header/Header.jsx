import React from 'react';
import ModalOpenButton from 'components/ModalCustom/ModalOpenButton/ModalOpenButton';

import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSignOutAction } from 'redux/auth/authAction';
import { selectUserData } from 'redux/selectors';
import PrivacyPolicy from 'components/PrivacyPolicyBlock/PrivacyPolicyBlock';

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
        <span className={css.logoText}>LO</span>
        <span className={css.logoText}>GO</span>
      </Link>
      {isLoggedIn && (
        <div className={css.userInfo}>
          <span className={admin.isAdmin ? css.adminName : css.userName}>
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
                <ModalOpenButton
                  className={css.navLink}
                  modalChildren={<PrivacyPolicy />}
                >
                  Правила та умови
                </ModalOpenButton>

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
