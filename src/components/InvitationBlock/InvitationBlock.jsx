import React from 'react';

import Block from 'components/Block/Block';
import Invitation from './Invitatiaon/Invitation';

// import s from './InvitationBlock.module.scss';

const InvitationBlock = () => {
  return (
    <Block
      title="Запрошення"
      subTitle="Ваш персональний лінк для запрошення та QR-Code який можна відсканувати "
      iconStartId="icon-share"
    >
      <Invitation />
    </Block>
  );
};

export default InvitationBlock;
