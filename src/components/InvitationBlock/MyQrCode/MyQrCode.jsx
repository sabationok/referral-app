import React from 'react';

import s from './MyQrCode.module.scss';
const MyQrCode = ({ text, size, padding }) => {
  const style = {
    width: `${size + 10}px`,
    height: `${size + 10}px`,
    padding: padding,
  };
  return (
    <div className={s.qrCodeBox} style={style}>
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${text}`}
        alt="myQrCode"
      />
    </div>
  );
};

export default MyQrCode;
