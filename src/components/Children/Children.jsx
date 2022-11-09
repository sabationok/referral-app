import React, { useState } from 'react';
import ChildrensList from 'components/ChildrensList/ChildrensList';

import s from './Children.module.scss';

const Children = ({ info, level }) => {
  const [isShow, setIsShow] = useState();
  const render = isShow && info.children.length !== 0;
  const disabledBtn = info.children.length !== 0;
  const myLevel = level+1

  function handleShowBtnClick() {
    setIsShow(!isShow);
  }
  return (
    <div className={s.childrenContainer}>
      <div className={s.children}>
        <span className={s.level}>{myLevel}</span>
        <span className={s.name}>{info.name}</span>
        <span className={s.id}>{`id${info.id}`}</span>
        <span className={s.phone}>{info.phone}</span>
        <button className={s.button} type="button" disabled={!disabledBtn} onClick={handleShowBtnClick}>
          {isShow ? 'Hide' : 'Show'}
        </button>
      </div>

      {render && (
        <div className={s.listContainer}>
          <ChildrensList arr={info.children} level={myLevel} />
        </div>
      )}
    </div>
  );
};

export default Children;
