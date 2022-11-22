import React from 'react';
import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';
import PrivacyPolicyBlock from 'components/PrivacyPolicyBlock/PrivacyPolicyBlock';
import RullesBlock from 'components/RullesBlock/RullesBlock';
import UserInfo from '../UserInfo/UserInfo';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { userLogOutThunk } from 'redux/auth/authThunks';
import { selectUserData } from 'redux/selectors';

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
          <span className={s.logoText}>LOGO</span>
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
                <ModalOpenLink
                  className={s.navLink}
                  modalContent={<PrivacyPolicyBlock />}
                >
                  Політика конфіденційності
                </ModalOpenLink>
                <ModalOpenLink
                  className={s.navLink}
                  modalContent={<RullesBlock />}
                >
                  Правила сервісу
                </ModalOpenLink>

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
      <SvgIcon iconId={'icon-person'} size={'32px'}/>
    </header>
  );
};

export default Header;
