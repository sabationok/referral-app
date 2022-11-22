import React, { useState } from 'react';
import ChildrensList from 'components/ChildrensBlock/ChildrensList/ChildrensList';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './Children.module.scss';

const Children = ({ info, level }) => {
  const [isShow, setIsShow] = useState(false);
  const childrenCount = info.children.length;
  const renderList = isShow && childrenCount > 0;
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
        <div className={s.avatarBox}>
          <SvgIcon iconId="icon-person" size={'95%'} style={{ fill: '#FFF' }} />
        </div>
        <div className={s.info}>
          <span className={s.name}>Ім'я: {info.name}</span>
          <span className={s.id}>ID:{info.id}</span>
          <span className={s.childrenCount}>Запрошено:{childrenCount}</span>
        </div>

        {childrenCount > 0 && (
          <SvgIcon iconId="icon-select-arrow" size={'14px'} svgClass={s.icon} />
        )}
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
