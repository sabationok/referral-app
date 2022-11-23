import React from 'react';

import s from './ButtonText.module.scss';

const ButtonText = ({
  children,
  type = 'button',
  disabled = false,
  style = {},
  className = '',
  onClick = null,
  styleType = 'PrimaryBtn',
}) => {
  const classNames = [s.Button, s[styleType], className].join(' ');
  function handleBtnClick() {
    if (onClick) {
      onClick();
      return;
    }
    return;
  }
  return (
    <button
      style={style}
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={handleBtnClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default ButtonText;
