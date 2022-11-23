import React from 'react';
import AppLoader from 'components/AppLoader/AppLoader';
import SignUpBlock from 'components/SignUpBlock/SignUpBlock';

import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';

import s from './SignUpPage.module.scss';
const SignUpPage = () => {
  const { isLoading } = useSelector(selectUserData);

  return (
    <>
      <div className={s.SignUpPage}>
        <SignUpBlock />
      </div>
      <AppLoader isLoading={isLoading} />
    </>
  );
};

export default SignUpPage;
