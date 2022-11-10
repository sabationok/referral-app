import React, { useState } from 'react';
import ChildrensList from 'components/ChildrensList/ChildrensList';

import s from './Children.module.scss';

const Children = ({ info, level }) => {
  const [isShow, setIsShow] = useState();
  const childrenCount = info.children.length;
  const render = isShow && childrenCount;
  const nextLevel = level + 1;

  function handleShowBtnClick() {
    setIsShow(!isShow);
  }

  return (
    <div className={s.childrenContainer}>
      <div className={[s.children, s[`level_${level}`]].join(' ')}>
        <div className={s.info}>
          <span className={s.level}>{level}</span>
          <span className={s.name}>{info.name}</span>
          <span className={s.id}>{`id${info.id}`}</span>
          <span className={s.childrenCount}>{`(${childrenCount})`}</span>
          <span className={s.phone}>{info.phone}</span>
        </div>
        <button
          className={s.button}
          type="button"
          disabled={!childrenCount}
          onClick={handleShowBtnClick}
        >
          {isShow ? 'Hide' : 'Show'}
        </button>
      </div>

      {render && (
        <div className={s.listContainer}>
          <ChildrensList arr={info.children} level={nextLevel} />
        </div>
      )}
    </div>
  );
};

export default Children;
