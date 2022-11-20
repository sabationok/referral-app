import React from 'react';
import Block from 'components/Block/Block';

import sprite from 'img/sprite';
import s from './PrivacyPolicyBlock.module.scss';

const PrivacyPolicy = () => {
  return (
    <Block
      title="Політика конфіденційності"
      subTitle="Тут ви можете преглянути нашу політику конфіденційності"
      className={s.modalBlock}
      sprite={sprite}
      iconStartId="icon-assignmentIn"
      iconClassName={s.iconColor}
    >
      <div className={s.text}>
        Privacy Policy Text Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Praesentium tempora sequi eos porro inventore ipsa quia facilis?
        Eaque sed laborum accusamus autem ducimus. Quaerat reprehenderit qui
        molestiae beatae quo alias.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Praesentium tempora sequi eos porro inventore ipsa
        quia facilis? Eaque sed laborum accusamus autem ducimus. Quaerat
        reprehenderit qui molestiae beatae quo alias. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium tempora sequi eos porro
        inventore ipsa quia facilis? Eaque sed laborum accusamus autem ducimus.
        Quaerat reprehenderit qui molestiae beatae quo alias. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Praesentium tempora sequi eos
        porro inventore ipsa quia facilis? Eaque sed laborum accusamus autem
        ducimus. Quaerat reprehenderit qui molestiae beatae quo alias. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora
        sequi eos porro inventore ipsa quia facilis? Eaque sed laborum accusamus
        autem ducimus. Quaerat reprehenderit qui molestiae beatae quo alias.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        tempora sequi eos porro inventore ipsa quia facilis? Eaque sed laborum
        accusamus autem ducimus. Quaerat reprehenderit qui molestiae beatae quo
        alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium tempora sequi eos porro inventore ipsa quia facilis? Eaque
        sed laborum accusamus autem ducimus. Quaerat reprehenderit qui molestiae
        beatae quo alias. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Praesentium tempora sequi eos porro inventore ipsa quia facilis?
        Eaque sed laborum accusamus autem ducimus. Quaerat reprehenderit qui
        molestiae beatae quo alias. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Praesentium tempora sequi eos porro inventore ipsa
        quia facilis? Eaque sed laborum accusamus autem ducimus. Quaerat
        reprehenderit qui molestiae beatae quo alias. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium tempora sequi eos porro
        inventore ipsa quia facilis? Eaque sed laborum accusamus autem ducimus.
        Quaerat reprehenderit qui molestiae beatae quo alias. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Praesentium tempora sequi eos
        porro inventore ipsa quia facilis? Eaque sed laborum accusamus autem
        ducimus. Quaerat reprehenderit qui molestiae beatae quo alias. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora
        sequi eos porro inventore ipsa quia facilis? Eaque sed laborum accusamus
        autem ducimus. Quaerat reprehenderit qui molestiae beatae quo alias.
      </div>
    </Block>

    // <div className={s.modalContent}>
    //   <div className={s.header}>Privacy Policy</div>
    //   <div className={s.content}>
    //     <div className={s.text}>
    //       Privacy Policy Text Lorem ipsum dolor sit amet consectetur adipisicing
    //       elit. Praesentium tempora sequi eos porro inventore ipsa quia facilis?
    //       Eaque sed laborum accusamus autem ducimus. Quaerat reprehenderit qui
    //       molestiae beatae quo alias.Lorem ipsum dolor sit amet consectetur
    //       adipisicing elit. Praesentium tempora sequi eos porro inventore ipsa
    //       quia facilis? Eaque sed laborum accusamus autem ducimus. Quaerat
    //       reprehenderit qui molestiae beatae quo alias. Lorem ipsum dolor sit
    //       amet consectetur adipisicing elit. Praesentium tempora sequi eos porro
    //       inventore ipsa quia facilis? Eaque sed laborum accusamus autem
    //       ducimus. Quaerat reprehenderit qui molestiae beatae quo alias. Lorem
    //       ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora
    //       sequi eos porro inventore ipsa quia facilis? Eaque sed laborum
    //       accusamus autem ducimus. Quaerat reprehenderit qui molestiae beatae
    //       quo alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //       Praesentium tempora sequi eos porro inventore ipsa quia facilis? Eaque
    //       sed laborum accusamus autem ducimus. Quaerat reprehenderit qui
    //       molestiae beatae quo alias. Lorem ipsum dolor sit amet consectetur
    //       adipisicing elit. Praesentium tempora sequi eos porro inventore ipsa
    //       quia facilis? Eaque sed laborum accusamus autem ducimus. Quaerat
    //       reprehenderit qui molestiae beatae quo alias. Lorem ipsum dolor sit
    //       amet consectetur adipisicing elit. Praesentium tempora sequi eos porro
    //       inventore ipsa quia facilis? Eaque sed laborum accusamus autem
    //       ducimus. Quaerat reprehenderit qui molestiae beatae quo alias. Lorem
    //       ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora
    //       sequi eos porro inventore ipsa quia facilis? Eaque sed laborum
    //       accusamus autem ducimus. Quaerat reprehenderit qui molestiae beatae
    //       quo alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //       Praesentium tempora sequi eos porro inventore ipsa quia facilis? Eaque
    //       sed laborum accusamus autem ducimus. Quaerat reprehenderit qui
    //       molestiae beatae quo alias. Lorem ipsum dolor sit amet consectetur
    //       adipisicing elit. Praesentium tempora sequi eos porro inventore ipsa
    //       quia facilis? Eaque sed laborum accusamus autem ducimus. Quaerat
    //       reprehenderit qui molestiae beatae quo alias. Lorem ipsum dolor sit
    //       amet consectetur adipisicing elit. Praesentium tempora sequi eos porro
    //       inventore ipsa quia facilis? Eaque sed laborum accusamus autem
    //       ducimus. Quaerat reprehenderit qui molestiae beatae quo alias. Lorem
    //       ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora
    //       sequi eos porro inventore ipsa quia facilis? Eaque sed laborum
    //       accusamus autem ducimus. Quaerat reprehenderit qui molestiae beatae
    //       quo alias.
    //     </div>
    //   </div>
    // </div>
  );
};

export default PrivacyPolicy;
