import React from 'react';
// import PropTypes from 'prop-types';
// import BlockPortal from './BlockPportal';
import scss from './Block.module.scss';

const Block = ({
  children,
  title = null,
  subTitle = null,
  footer = true,
  header = true,
  style = null,
  className = '',
  sprite = null,
  iconStartId = null,
}) => {
  console.log(`small block '${title}'render`);
  const blockClassName = [scss.block, className].join(' ');

  return (
    <div className={blockClassName} style={style}>
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
          {subTitle && (
            <span className={scss.subTitle} title={subTitle}>
              {subTitle}
            </span>
          )}
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
