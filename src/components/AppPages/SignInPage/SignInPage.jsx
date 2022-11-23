import React from 'react';
import AppLoader from 'components/AppLoader/AppLoader';
import SignInBlock from 'components/SignInBlock/SignInBlock';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';

import s from './SignInPage.module.scss';
//* email: 'tester3@mail.com';
//* name: 'tester';
//* parentId: 2;
//* password: '12345678';
//* phone: '+380677894561';
const SignInPage = () => {
  const { isLoading } = useSelector(selectUserData);

  return (
    <>
      <div className={s.SignInPage}>
        <SignInBlock />
      </div>
      <AppLoader isLoading={isLoading} />
    </>
  );
};

export default SignInPage;
