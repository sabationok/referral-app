import React from 'react';

import SlickTest from './SlickTest';
import s from './BonusesBlock.module.scss';

const BonusesBlock = () => {
  return (
    <>
      <div className={s.BonusesBlock}>
        <div className={s.clickContainer}>
          <SlickTest />
        </div>
      </div>
    </>
  );
};

export default BonusesBlock;
