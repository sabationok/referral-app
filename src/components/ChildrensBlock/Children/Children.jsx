import React, { useState } from 'react';
import ChildrensList from 'components/ChildrensBlock/ChildrensList/ChildrensList';

import sprite from 'img/sprite';

import s from './Children.module.scss';

const Children = ({ info, level }) => {
  const [isShow, setIsShow] = useState(false);
  const childrenCount = info.children.length;
  const renderList = isShow && childrenCount;
  const nextLevel = level + 1;
  const childrenClassList = [s.childrenContainer, isShow && ''].join(' ');
  const childrenBtnClassList = [s.ChildrenBtn, isShow && s.isShow].join(' ');

  function handleShowBtnClick() {
    setIsShow(!isShow);
  }

  return (
    <div className={childrenClassList}>
      <button
        className={childrenBtnClassList}
        type="button"
        disabled={!childrenCount}
        onClick={handleShowBtnClick}
      >
        <span className={s.level}>{level}</span>
        <div className={s.info}>
          <span className={s.name}>Name: {info.name}</span>
          <span className={s.id}>{`ID: ${info.id}`}</span>
          <span className={s.phone}>Phone: {info.phone}</span>
          <span
            className={s.childrenCount}
          >{`Referrals: ${childrenCount}`}</span>
        </div>

        <span className={s.icon}>
          <svg className={s.iconSvg}>
            <use href={`${sprite}#icon-select-arrow`}></use>
          </svg>
        </span>
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
