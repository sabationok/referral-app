import React from 'react';

import CreateBonusesBlock from 'components/CreateBonusesBlock/CreateBonusesBlock';
import SignUpBlock from 'components/SignUpBlock/SignUpBlock';

import s from './AdminPage.module.scss';

const AdminPage = () => {
  return (
    <>
      <div className={s.AdminPage}>
        <CreateBonusesBlock />
        <SignUpBlock signInBtn={false} policy={false} />
      </div>
    </>
  );
};

export default AdminPage;
