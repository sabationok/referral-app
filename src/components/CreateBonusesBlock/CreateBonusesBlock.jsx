import React from 'react';
import Block from 'components/Block/Block';
import AccrulaBonusForm from './AccrulalBonus/AccrulaBonusForm';

import s from './CreateBonusesBlock.module.scss';
const CreateBonusesBlock = () => {
  return (
    <Block
      title="Створення бонусів"
      subTitle={'Тут адмін може створити бонуси для будь-якого користувача'}
      iconStartId="icon-settings"
      className={s.block}
    >
      <div>
        <AccrulaBonusForm />
      </div>
    </Block>
  );
};

export default CreateBonusesBlock;
