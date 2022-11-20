import React from 'react';

import CreateBonusesBlock from 'components/CreateBonusesBlock/CreateBonusesBlock';

import s from './AdminPage.module.scss';

const AdminPage = () => {
  return (
    <>
      <div className={s.MainPage}>
        <CreateBonusesBlock />
      </div>
    </>
  );
};

export default AdminPage;
