import React, { useState } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { NavLink } from 'react-router-dom';
import s from './MobileNavMenu.module.scss';
const MobileNavMenu = () => {
  const navLinks = [
    { iconId: 'icon-wallet', to: 'wallet' },
    { iconId: 'icon-transactions', to: 'transactions' },
    { iconId: 'icon-cardOk', to: 'payBack' },
    { iconId: 'icon-share', to: 'share' },
    { iconId: 'icon-present', to: 'transfer' },
    { iconId: 'icon-feadback', to: 'feadback' },
    { iconId: 'icon-persons', to: 'referrals' },
    { iconId: 'icon-partners', to: 'partners' },
    { iconId: 'icon-settings', to: 'settings' },
    { iconId: 'icon-stat', to: 'statistics' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  let menuBackDropClass = isOpen ? s.menuBackDropOpen : s.menuBackDrop;
  const buttonStyleType = isOpen ? 'ColoredBtn' : 'PrimaryBtn';

  function handleToggleMenu() {
    setIsOpen(!isOpen);
    console.log('handleToggleMenu');
    window.addEventListener('keydown', handleCloseByEscape);
  }
  function handleCloseByEscape(ev) {
    let { code } = ev;
    if (code === 'Escape') {
      setIsOpen(false);
      console.log('handleCloseByEscape');
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
