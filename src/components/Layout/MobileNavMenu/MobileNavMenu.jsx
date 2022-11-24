import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { NavLink } from 'react-router-dom';
import s from './MobileNavMenu.module.scss';
const MobileNavMenu = () => {
  const { admin } = useSelector(selectUserData);

  const navLinks = [
    { iconId: 'icon-wallet', title: 'Баланс', to: 'wallet' },
    { iconId: 'icon-transactions', title: 'Транзакції', to: 'transactions' },
    { iconId: 'icon-cardOk', title: 'Виплата', to: 'payBack' },
    { iconId: 'icon-present', title: 'Переказ', to: 'transfer' },
    { iconId: 'icon-share', title: 'Поділитись', to: 'share' },
    { iconId: 'icon-persons', title: 'Мережа', to: 'referrals' },
    { iconId: 'icon-stat', title: 'Статистика', to: 'statistics' },
    { iconId: 'icon-partners', title: 'Партнери', to: 'partners' },
    { iconId: 'icon-feadback', title: 'Відгук', to: 'feadback' },
    { iconId: 'icon-settings', title: 'Налаштування', to: 'settings' },
  ];
  const navLinksAdmin = [{ iconId: 'icon-admin',title: 'Адмін', to: 'admin' }];

  const [isOpen, setIsOpen] = useState(false);
  const menuBackDropClass = isOpen ? s.menuBackDropOpen : s.menuBackDrop;
  const buttonStyleType = isOpen ? 'ColoredBtn' : 'PrimaryBtn';

  function handleToggleMenu() {
    setIsOpen(!isOpen);
    window.addEventListener('keydown', handleCloseByEscape);
  }
  function handleCloseByEscape(ev) {
    let { code } = ev;
    if (code === 'Escape') {
      setIsOpen(false);
      window.removeEventListener('keydown', handleCloseByEscape);
    }
  }

  return (
    <>
      <div className={menuBackDropClass} onClick={handleToggleMenu}>
        <div className={s.MobileNavMenu}>
          <ButtonIcon
            iconId="icon-menuBurger"
            onClick={handleToggleMenu}
            size="56px"
            styles={{ boxShadow: '0 0 15px rgba(170,170,170,0.5)' }}
            styleType={buttonStyleType}
          />

          <ul className={s.navList}>
            {isOpen &&
              navLinks.map(el => (
                <li key={el.to} className={s.navItem}>
                  <NavLink to={`mobile/${el.to}`} className={s.navLink}>
                    <SvgIcon iconId={el.iconId} size="60%" />
                    <span className={s.linkTitle}>{el.title}</span>
                  </NavLink>
                </li>
              ))}
            {/* {isOpen &&
              admin.isAdmin &&(
                <li  className={s.navItem}>
                  <NavLink to='./admin' className={s.navLink}>
                    <SvgIcon iconId='icon-admin' size="60%" />
                    <span className={s.linkTitle}>Aadmin</span>
                  </NavLink>
                </li>
              )} */}
            {isOpen &&
              admin.isAdmin &&
              navLinksAdmin.map(el => (
                <li key={el.to} className={s.navItem}>
                  <NavLink to={el.to} className={s.navLink}>
                    <SvgIcon iconId={el.iconId} size="60%" />
                    <span className={s.linkTitle}>{el.title}</span>
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNavMenu;
