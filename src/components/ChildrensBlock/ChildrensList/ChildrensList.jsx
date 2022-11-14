import React from 'react';
import Children from 'components/ChildrensBlock/Children/Children';

import s from './ChildrensList.module.scss';

const ChildrensList = ({ arr, level }) => {

  if (level > 5) {
    return <></>;
  }
  return (
    <div className={s.ChildrensList}>
      {arr.map(item => (
        <Children key={item.id} info={item} level={level} />
      ))}
    </div>
  );
};

export default ChildrensList;
