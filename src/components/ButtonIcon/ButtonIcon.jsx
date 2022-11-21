import React from 'react';
import sprite from 'img/sprite';
import s from './ButtonIcon.module.scss';

const ButtonIcon = ({
  children,
  type = 'button',
  disabled = false,
  onClick = null,
  iconId = '',
  style = {},
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
      style={style}
      onClick={handleBtnClick}
    >
      <svg className={s.iconSvg}>
        <use href={`${sprite}#${iconId}`}></use>
      </svg>
    </button>
  );
};

export default ButtonIcon;
