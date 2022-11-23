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
  className = '',
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
      type={type}
      className={classNames}
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
