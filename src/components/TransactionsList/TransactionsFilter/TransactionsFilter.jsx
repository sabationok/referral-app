import React, { useState } from 'react';
import InputCustom from 'components/InputCustom/InputCustom';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import s from './TransactionsFilter.module.scss';
const TransactionsFilter = () => {
  const [inputData, setInputData] = useState('');
  function handleChangeInput(ev) {
    let { value } = ev.target;
    setInputData(value);
  }
  return (
    <form className={s.filter}>
      <InputCustom
        labelClass={s.label}
        inputClass={s.input}
        inputValue={inputData}
        name="idtransactionsFilter"
        id="idtransactionsFilter"
        placeholder="Пошук транзакцій по коментарях"
        onChange={handleChangeInput}
      />
      <ButtonIcon type="button" iconId="icon-filterOn" />
      <ButtonIcon type="button" iconId="icon-serch" />
    </form>
  );
};

export default TransactionsFilter;
