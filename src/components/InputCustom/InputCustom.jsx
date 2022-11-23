import React, { useEffect, useState } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './InputCustom.module.scss';
const InputCustom = ({
  labelClass = '',
  spanClass = '',
  inputClass = '',
  name = '',
  id = '',
  inputValue,
  labelValue = '',
  placeholder = '',
  type = 'text',
  required = true,
  onChange,
  ...others
}) => {
  const [isVisible, setIsVisible] = useState();
  const [inputType, setInputType] = useState(type);
  const iconId = isVisible ? 'icon-visibilityOn' : 'icon-visibilityOff';
  const visibilityBtn = type === 'password';
  function handleToggleVisibility() {
    setIsVisible(!isVisible);
  }
  useEffect(() => {
    if (type !== 'password') {
      return;
    }
    if (type === 'password' && isVisible) {
      setInputType('text');
      return;
    }
    setInputType(type);
  }, [isVisible, type]);
  return (
    <label className={labelClass} htmlFor={id}>
      <span className={spanClass}>{labelValue}</span>
      <span className={s.inputBox}>
        <input
          className={inputClass}
          name={name}
          type={inputType}
          id={id}
          value={inputValue && inputValue}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          {...others}
        />
        {visibilityBtn && (
          <batton
            type="button"
            className={s.visibilityBtn}
            onClick={handleToggleVisibility}
          >
            <SvgIcon iconId={iconId} />
          </batton>
        )}
      </span>
    </label>
  );
};

export default InputCustom;
