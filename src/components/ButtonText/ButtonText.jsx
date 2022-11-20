import React from 'react';

import s from './ButtonText.module.scss';

const ButtonText = ({ children, type = 'button' }) => {
  return (
    <button type={type} className={s.Button}>
      {children}
    </button>
  );
};

export default ButtonText;
