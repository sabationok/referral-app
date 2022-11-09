import React from 'react';

// import CollDate from './MyCollumns/CollDate';
// import CollLowerCase from './MyCollumns/CollLowerCase';
// import CollUpperCase from './MyCollumns/CollUpperCase';
// import CollRedColor from './MyCollumns/CollRedColor';
// import CollAdds from './MyCollumns/CollAdds';

import Coll_Balance from '../Collumns/Coll_Balance';
import Coll_Category from '../Collumns/Coll_Category';
import Coll_Type from '../Collumns/Coll_Type';
import Coll_Sum from '../Collumns/Coll_Sum';
import Coll_Date from '../Collumns/Coll_Date';
import Coll_Comment from '../Collumns/Coll_Comment';

import { useTableContext } from '../TableContext';
import { useRowContext } from './RowContext';
import { TableStyles as s } from '../TableStyleSheet';

const RowTop = () => {
  const { handleRowBodyToggle, titles, rowData, rowIdx, isBodyShow } =
    useRowContext();
  const { tableName = '', tableTitles = [] } = useTableContext();


  const CollMap = {
    // toUpperCase: CollUpperCase,
    // toLowerCase: CollLowerCase,
    // toRedColor: CollRedColor,
    // getFullYear: CollDate,
    // adds: CollAdds,
    date: Coll_Date,
    type: Coll_Type,
    category: Coll_Category,
    comment: Coll_Comment,
    sum: Coll_Sum,
    balance: Coll_Balance,
  };
  let Coll = <></>;

  return (
    <div className={s.rowTop}>
      {tableTitles.map((title, idx) => {
        if (CollMap[title?.action]) {
          
          Coll = CollMap[title.action];
          return <Coll key={title.id} title={title} colIdx={idx} />;
        }
        return <p>error coll {idx}</p>;
      })}
    </div>
  );
};

export default RowTop;
