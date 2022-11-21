import React from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './DeviceTypeInformer.module.css';

const DeviceTypeInformer = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 768 });
  const isTabletXL = useMediaQuery({ minWidth: 768, maxWidth: 1000 });
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  return (
    <div className={css.device}>
      <div className={css.type}>
        {isMobile && <p>Mobile</p>}
        {isTablet && <p>Tablet</p>}
        {isTabletXL && <p>TabletXL</p>}
        {isDesktop && <p>Desktop</p>}
      </div>
    </div>
  );
};

export default DeviceTypeInformer;
