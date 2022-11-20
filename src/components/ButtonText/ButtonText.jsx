import React from 'react';

import s from './ButtonText.module.scss';

const ButtonText = ({ children, type = 'button', disabled = false }) => {
  return (
    <button type={type} className={s.Button} disabled={disabled}>
      {children}
    </button>
  );
};

export default ButtonText;
