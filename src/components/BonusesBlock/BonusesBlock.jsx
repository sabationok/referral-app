import React from 'react';

import SlickTest from './SlickTest';
import s from './BonusesBlock.module.scss';

const BonusesBlock = () => {
  return (
    <>
      <div className={s.BonusesBlock}>
        <div className={s.slickContainer}>
          <SlickTest />
        </div>
      </div>
    </>
  );
};

export default BonusesBlock;
