import React, { useState } from 'react';
import Block from 'components/Block/Block';
import ButtonText from 'components/ButtonText/ButtonText';
import AppLoader from 'components/AppLoader/AppLoader';
import { useDispatch, useSelector } from 'react-redux';
import { userLogInThunk } from 'redux/auth/authThunks';
import { selectUserData } from 'redux/selectors';
import { Link } from 'react-router-dom';

import sprite from 'img/sprite';

import s from './SignInPage.module.scss';
//* email: 'tester3@mail.com';
//* name: 'tester';
//* parentId: 2;
//* password: '12345678';
//* phone: '+380677894561';
const SignInPage = () => {
  const { isLoading } = useSelector(selectUserData);
  const InititalState = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(InititalState);

  const dispatch = useDispatch();

  function handleChangeInput(ev) {
    let { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleFormSubmit(ev) {
    ev.preventDefault();
    dispatch(userLogInThunk(formData));
    setFormData(InititalState);
  }

  return (
    <>
      <div className={s.SignInPage}>
        <Block
          title="Авторизація"
          subTitle="Увійдіть до обліковго запису використовуючи емейл та пароль"
          sprite={sprite}
          iconStartId="icon-signIn"
        >
          <form className={s.form} onSubmit={handleFormSubmit}>
            <label className={s.label} htmlFor="email">
              <span className={s.span}>Електронна адреса</span>
              <input
                className={s.input}
                name="email"
                type="email"
                id="email"
                value={formData.email}
                placeholder={'email'}
                required
                onChange={handleChangeInput}
              />
            </label>
            <label className={s.label} htmlFor="password">
              <span className={s.span}>Пароль</span>
              <input
                className={s.input}
                name="password"
                type="password"
                id="password"
                value={formData.password}
                placeholder={'password'}
                required
                onChange={handleChangeInput}
              />
            </label>
            <ButtonText type="submit">SignIn</ButtonText>
            <p className={s.noProfile}>
              <span>У Вас ще немає профілю?</span>
              <br />
              <span>Тоді скористуйтесь</span>{' '}
              <Link to="/signUp" className={s.link}>
                Формою реєстрації
              </Link>
            </p>
          </form>
        </Block>
      </div>
      <AppLoader isLoading={isLoading} />
    </>
  );
};

export default SignInPage;
