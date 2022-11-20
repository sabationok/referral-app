import React from 'react';
import CreateTransferForm from './CreateTransferForm/CreateTransferForm';
import s from './CreateTransferBlock.module.scss';
const CreateTransferBlock = () => {
  return (
    <div className={s.transferBlock}>
      <CreateTransferForm />
    </div>
  );
};

export default CreateTransferBlock;
