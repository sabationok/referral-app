import React, { useState } from 'react';
import ChildrensList from 'components/ChildrensBlock/ChildrensList/ChildrensList';

import s from './Children.module.scss';

const Children = ({ info, level }) => {
  const [isShow, setIsShow] = useState();
  const childrenCount = info.children.length;
  const renderList = isShow && childrenCount;
  const nextLevel = level + 1;

  function handleShowBtnClick() {
    setIsShow(!isShow);
  }

  return (
    <div className={s.childrenContainer}>
      <button
        className={[s.children, s[`level_${level}`]].join(' ')}
        type="button"
        disabled={!childrenCount}
        onClick={handleShowBtnClick}
      >
        <span className={s.level}>{level}</span>
        <div className={s.info}>
          <span className={s.name}>Name: {info.name}</span>
          <span className={s.id}>{`ID: ${info.id}`}</span>
          <span className={s.phone}>Phone: {info.phone}</span>
          <span className={s.childrenCount}>{`Referrals: ${childrenCount}`}</span>
        </div>
        <span className={s.svg}>{isShow ? 'H' : 'S'}</span>
      </button>

      {renderList && (
        <div className={s.listContainer}>
          <ChildrensList arr={info.children} level={nextLevel} />
        </div>
      )}
    </div>
  );
};

export default Children;
