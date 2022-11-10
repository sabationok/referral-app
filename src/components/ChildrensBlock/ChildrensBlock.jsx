import React from 'react';
import { useSelector } from 'react-redux';
import { selectChildrensInfo } from 'redux/selectors';

import ChildrensList from 'components/ChildrensList/ChildrensList';

import s from './ChildrensBlock.module.scss';

const ChildrensBlock = () => {
  const { childrensList } = useSelector(selectChildrensInfo);

  return (
    <div className={s.childrensBlock}>
      <ChildrensList arr={childrensList} level={1} />
    </div>
  );
};

export default ChildrensBlock;
