import React, { useState } from 'react';
import Block from 'components/Block/Block';
import ButtonText from 'components/ButtonText/ButtonText';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import InputCustom from 'components/InputCustom/InputCustom';
import { useDispatch } from 'react-redux';
import { userLogInThunk } from 'redux/auth/authThunks';

import sprite from 'img/sprite';

import s from './SignInBlock.module.scss';

const SignInBlock = () => {
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
      <Block
        title="Авторизація"
        subTitle="Увійдіть до обліковго запису використовуючи емейл та пароль"
        sprite={sprite}
        iconStartId="icon-signIn"
      >
        <form className={s.form} onSubmit={handleFormSubmit}>
          <InputCustom
            labelClass={s.label}
            spanClass={s.span}
            inputClass={s.input}
            labelValue="Електронна адреса"
            inputValue={formData.email}
            name="email"
            id="email"
            type="email"
            placeholder="example@mail.com"
            required
            onChange={handleChangeInput}
          />
          <InputCustom
            labelClass={s.label}
            spanClass={s.span}
            inputClass={s.input}
            labelValue="Пароль"
            inputValue={formData.password}
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            required
            onChange={handleChangeInput}
          />
          <ButtonText type="submit" styleType="ColoredBtn">
            Вхід
          </ButtonText>
          <ButtonLink to="/signUp">Реєстрація</ButtonLink>
        </form>
      </Block>
    </>
  );
};

export default SignInBlock;
