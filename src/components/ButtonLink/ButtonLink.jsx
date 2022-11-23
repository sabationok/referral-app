import React from 'react';
import { Link } from 'react-router-dom';

import s from './ButtonLink.module.scss';
const ButtonLink = ({
  children,
  to = '/',
  style = {},
  className = '',
  onClick,
  styleType = 'PrimaryBtn',
}) => {
  const classNames = [s.Button, s[styleType], className].join(' ');
  return (
    <Link to={to} onClick={onClick} style={style} className={classNames}>
      <span>{children}</span>
    </Link>
  );
};

export default ButtonLink;
