import React from 'react';
// import PropTypes from 'prop-types';
// import BlockPortal from './BlockPportal';
import scss from './Block.module.scss';

const Block = ({ children, title = '' }) => {
  console.log(`small block '${title}'render`);
  return (
    <div className={scss.block}>
      <div className={scss.header}>{title}</div>
      <div className={scss.content}>
        <div className={scss.overflow}>{children}</div>
      </div>
      <div className={scss.footer}></div>
    </div>
  );
};

Block.propTypes = {};

export default Block;
