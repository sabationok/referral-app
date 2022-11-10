import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBonusAccrualThunk } from 'redux/transactions/transactionsThunks';

import s from './AccrulaBonusForm.module.scss';

const AccrulaBonusForm = () => {
  const dispatch = useDispatch();
  const accrulaInitialSate = {
    type: 'personal',
    amount: null,
    notes: '',
    toUser: 33,
  };
  const [accrualData, setAccrualData] = useState(accrulaInitialSate);

  function handleAcrrualFormInputChange(ev) {
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
    <form className={s.accrualForm} onSubmit={handleAccrulalFormSubmit}>
      <div className={s.accrualFormInputs}>
        <input
          className={s.input}
          type="text"
          name="type"
          placeholder="bonus type"
          defaultValue={accrualData.type}
          onChange={handleAcrrualFormInputChange}
          required
        />
        <input
          className={s.input}
          type="number"
          name="amount"
          placeholder="bonus amount"
          defaultValue={accrualData.amount}
          onChange={handleAcrrualFormInputChange}
          required
        />
        <input
          className={s.input}
          type="number"
          name="toUser"
          placeholder="toUser"
          defaultValue={accrualData.toUser}
          onChange={handleAcrrualFormInputChange}
          required
        />
        <input
          className={s.input}
          type="text"
          name="notes"
          placeholder="bonus notes"
          defaultValue={accrualData.notes}
          onChange={handleAcrrualFormInputChange}
        />
      </div>
      <button className={s.button}>Create accrual bonus</button>
    </form>
  );
};

export default AccrulaBonusForm;
