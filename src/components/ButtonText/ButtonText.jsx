import React from 'react';

import s from './ButtonText.module.scss';

const ButtonText = ({
  children,
  type = 'button',
  disabled = false,
  onClick = null,
}) => {
  function handleBtnClick() {
    if (onClick) {
      onClick();
      return;
    }
    return;
  }
  return (
    <button
      type={type}
      className={s.Button}
      disabled={disabled}
      onClick={handleBtnClick}
    >
      {children}
    </button>
  );
};

export default ButtonText;