import React from 'react';
import ButtonText from 'components/ButtonText/ButtonText';
import s from './CreateTransferBlock.module.scss';
const CreateTransferBlock = () => {
  return (
    <div>
      <form className={s.form}>
        
        <div className={s.buttons}>
          <ButtonText>Надіслати</ButtonText>
          <ButtonText>Скасувати</ButtonText>
        </div>
      </form>
    </div>
  );
};

export default CreateTransferBlock;
