import React from 'react';
import ModalOpenButton from 'components/ModalCustom/ModalOpenButton/ModalOpenButton';

import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOutThunk } from 'redux/auth/authThunks';
import { selectUserData } from 'redux/selectors';
import PrivacyPolicyBlock from 'components/PrivacyPolicyBlock/PrivacyPolicyBlock';
import RullesBlock from 'components/RullesBlock/RullesBlock';

import UserInfo from '../UserInfo/UserInfo';

import s from './Header.module.scss';
const Header = () => {
  const { isLoggedIn, user, admin } = useSelector(selectUserData);

  const dispatch = useDispatch();

  function handleSignOut() {
    let isSignOut = window.confirm('Are you realy want to signOut?');
    isSignOut && dispatch(userLogOutThunk());
  }

  return (
    <header className={s.header}>
      <div className={s.menuBox}>
        <div className={s.logoLink}>
          <span className={s.logoText}>LO</span>
          <span className={s.logoText}>GO</span>
        </div>
        <ul className={s.navList}>
          {isLoggedIn && <UserInfo />}

          <li>
            {!isLoggedIn && (
              <>
                <NavLink
                  className={s.navLink}
                  to="signIn"
                  rel="noopener noreferrer"
                >
                  Вхід
                </NavLink>
                <NavLink
                  className={s.navLink}
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
                  className={s.navLink}
                  to="main"
                  rel="noopener noreferrer"
                >
                  Головна
                </NavLink>
                {admin.isAdmin && (
                  <NavLink
                    className={s.navLink}
                    to="admin"
                    rel="noopener noreferrer"
                  >
                    Адмін
                  </NavLink>
                )}
                <ModalOpenButton
                  className={s.navLink}
                  modalChildren={<PrivacyPolicyBlock />}
                >
                  Політика конфіденційності
                </ModalOpenButton>
                <ModalOpenButton
                  className={s.navLink}
                  modalChildren={<RullesBlock />}
                >
                  Правила сервісу
                </ModalOpenButton>

                <button className={s.navLink} onClick={handleSignOut}>
                  Вихід
                </button>
              </>
            )}
          </li>
        </ul>
      </div>
      {isLoggedIn && (
        <div className={s.userInfo}>
          <span className={admin.isAdmin ? s.adminName : s.userName}>
            Wellcome! {user?.name}{' '}
            <span className={s.userId}>{`(id: ${user?.id})`}</span>
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
