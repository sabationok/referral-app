import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
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
  return (
    <div className={s.MobileNavMenu}>
      {navLinks.map(el => (
        <NavLink key={el.to} to={`mobile/${el.to}`} className={s.navLink}>
          <SvgIcon iconId={el.iconId} size="24px" />
        </NavLink>
      ))}
    </div>
  );
};

export default MobileNavMenu;
