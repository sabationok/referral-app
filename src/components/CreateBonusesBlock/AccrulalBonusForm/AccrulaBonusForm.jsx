import React, { useState } from 'react';
import ButtonText from 'components/ButtonText/ButtonText';
import InputCustom from 'components/InputCustom/InputCustom';
import { useDispatch } from 'react-redux';
import { postBonusAccrualThunk } from 'redux/transactions/transactionsThunks';

import s from './AccrulaBonusForm.module.scss';

const AccrulaBonusForm = () => {
  const dispatch = useDispatch();
  const accrulaInitialSate = {
    type: 'personal',
    amount: null,
    notes: '',
    toUser: '27',
  };
  const [accrualData, setAccrualData] = useState(accrulaInitialSate);

  function handleChangeInput(ev) {
    const { name, value } = ev.target;
    setAccrualData({ ...accrualData, [name]: value });
  }
  function handleAccrulalFormSubmit(ev) {
    ev.preventDefault();
    const postData = {
      type: accrualData.type,
      amount: Number(accrualData.amount),
      notes: accrualData.notes,
      toUser: Number(accrualData.toUser),
    };
    console.log(postData);
    dispatch(postBonusAccrualThunk(postData));
    setAccrualData(accrulaInitialSate);
  }
  // ISumUserBlockedBonuses={
  //   total*	number
  //   example: 600
  //   personal*	number
  //   example: 100
  //   referral*	number
  //   example: 50
  //   extra*	number
  //   example: 250
  //   cashback*	number
  //   example: 200
  //   }
  return (
    <form className={s.form} onSubmit={handleAccrulalFormSubmit}>
      <div className={s.inputs}>
        <InputCustom
          labelClass={s.label}
          spanClass={s.span}
          inputClass={s.input}
          labelValue="Тип бонусів"
          InputValue={accrualData.type}
          name="type"
          id="type"
          type="text"
          placeholder="Тип бонусів"
          title={"Тип бонусів: 'personal, cashback, referral, extra'"}
          required
          onChange={handleChangeInput}
        />
        <InputCustom
          labelClass={s.label}
          spanClass={s.span}
          inputClass={s.input}
          labelValue="Кількість бонусів"
          InputValue={accrualData.amount}
          name="amount"
          id="amount"
          type="number"
          placeholder="Кількість бонусів"
          min={0}
          // pattern='[0-9]'
          required
          onChange={handleChangeInput}
        />

        <InputCustom
          labelClass={s.label}
          spanClass={s.span}
          inputClass={s.input}
          labelValue="ID користувача"
          InputValue={accrualData.toUser}
          name="toUser"
          id="toUser"
          type="text"
          placeholder="ID користувача"
          required
          onChange={handleChangeInput}
        />
        <InputCustom
          labelClass={s.label}
          spanClass={s.span}
          inputClass={s.input}
          labelValue="Коментар"
          InputValue={accrualData.notes}
          name="notes"
          id="notes"
          type="text"
          placeholder="Коментар"
          required
          onChange={handleChangeInput}
        />
        <ButtonText type="submit">Create accrual bonus</ButtonText>
      </div>
    </form>
  );
};

export default AccrulaBonusForm;
