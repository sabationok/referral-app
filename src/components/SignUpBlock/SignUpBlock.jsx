import React, { useState } from 'react';
import Block from 'components/Block/Block';
import ButtonText from 'components/ButtonText/ButtonText';
import PrivacyPolicyBlock from 'components/PrivacyPolicyBlock/PrivacyPolicyBlock';
import RullesBlock from 'components/RullesBlock/RullesBlock';
import ModalOpenLink from 'components/ModalCustom/ModalOpenLink/ModalOpenLink';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import InputCustom from 'components/InputCustom/InputCustom';

import { useDispatch } from 'react-redux';
import { userRegisterThunk } from 'redux/auth/authThunks';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import sprite from 'img/sprite';
import s from './SignUpBlock.module.scss';
const SignUpBlock = ({ signInBtn, agreament }) => {
  const dispatch = useDispatch();
  const { referrerId } = useParams();
  const initialFormData = {
    name: 'Петро М',
    phone: '+380674567892',
    email: 'mail@mail.com',
    password: '',
    repeatPassword: '',
    parentId: referrerId || '',
  };
  const [formData, setFormData] = useState(initialFormData);

  function handleChangeInput(ev) {
    let { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleFormSubmit(ev) {
    ev.preventDefault();
    const newUser = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
      parentId: Number(referrerId) || Number(formData.parentId),
    };
    if (formData.repeatPassword !== formData.password) {
      console.table(formData)
      console.table(initialFormData)
      toast.error('Паролі не співпадають');
      return;
    }
    dispatch(userRegisterThunk(newUser));
    setFormData(initialFormData);
  }

  return (
    <>
      <Block
        title="Реєстрація"
        subTitle={
          referrerId
            ? `Реєстрація нового користувача (Запрошення від користувача ID:${referrerId})`
            : `Реєстрація нового користувача`
        }
        sprite={sprite}
        iconStartId="icon-signUp"
      >
        <form className={s.form} onSubmit={handleFormSubmit}>
          <InputCustom
            labelClass={s.label}
            spanClass={s.span}
            inputClass={s.input}
            labelValue="І'мя"
            inputValue={formData.name}
            name="name"
            id="name"
            type="text"
            placeholder="І'мя"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChangeInput}
          />
          <InputCustom
            labelClass={s.label}
            spanClass={s.span}
            inputClass={s.input}
            labelValue="Телефон"
            inputValue={formData.phone}
            name="phone"
            id="phone"
            type="text"
            placeholder="+3801234567"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChangeInput}
          />
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
          <InputCustom
            labelClass={s.label}
            spanClass={s.span}
            inputClass={s.input}
            labelValue="Повторіть пароль"
            inputValue={formData.repeatPassword}
            name="repeatPassword"
            id="repeatPassword"
            type="password"
            placeholder="Repeat password"
            required
            onChange={handleChangeInput}
          />
          <InputCustom
            labelClass={s.label}
            spanClass={s.span}
            inputClass={s.input}
            labelValue="Хто запросив? (ID)"
            inputValue={formData.parentId}
            name="parentId"
            id="parentId"
            type="text"
            placeholder="ID: "
            disabled={referrerId}
            required
            onChange={handleChangeInput}
          />
          {agreament && (
            <p className={s.agreament}>
              <span>
                Настискаючи кнопку реєстрації, Ви погоджуєтесь із нашою <br />
                <ModalOpenLink
                  className={s.link}
                  modalContent={<PrivacyPolicyBlock />}
                >
                  Політикою конфіденційності
                </ModalOpenLink>{' '}
                та{' '}
                <ModalOpenLink
                  className={s.link}
                  modalContent={<RullesBlock />}
                >
                  Правилами сервісу
                </ModalOpenLink>
              </span>
            </p>
          )}
          <ButtonText type="submit" styleType="ColoredBtn">
            Реєстрація
          </ButtonText>
          {signInBtn && <ButtonLink to="/signIn">Вхід</ButtonLink>}
        </form>
      </Block>
    </>
  );
};

export default SignUpBlock;
