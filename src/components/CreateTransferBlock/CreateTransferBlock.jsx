import React from 'react';
import Block from 'components/Block/Block';
import CreateTransferForm from './CreateTransferForm/CreateTransferForm';

import s from './CreateTransferBlock.module.scss';
const CreateTransferBlock = () => {
  return (
    <Block
      title="Поділитись бонусами"
      subTitle="Для переказу введіть ID користувача та суму для списання бонусів"
      iconStartId="icon-present"
    >
      <div className={s.transferBlock}>
        <CreateTransferForm />
      </div>
    </Block>
  );
};

export default CreateTransferBlock;
