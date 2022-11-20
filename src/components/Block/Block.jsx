import React from 'react';
// import PropTypes from 'prop-types';
// import BlockPortal from './BlockPportal';
import scss from './Block.module.scss';

const Block = ({
  children,
  title = null,
  subTitle = null,
  sprite,
  iconStartId,
  footer = true,
  header = true,
}) => {
  console.log(`small block '${title}'render`);
  return (
    <div className={scss.block}>
      {header && (
        <div className={scss.header}>
          {sprite && sprite && (
            <span className={scss.iconStart}>
              <svg className={scss.iconSvg}>
                <use href={`${sprite}#${iconStartId}`}></use>
              </svg>
            </span>
          )}
          {title && <span className={scss.title}>{title}</span>}
          {subTitle && <span className={scss.subTitle} title={subTitle}>{subTitle}</span>}
        </div>
      )}
      <div className={scss.content}>
        <div className={scss.overflow}>{children}</div>
      </div>
      {footer && <div className={scss.footer}></div>}
    </div>
  );
};

Block.propTypes = {};

export default Block;
