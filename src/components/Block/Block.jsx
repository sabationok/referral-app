import React from 'react';
// import PropTypes from 'prop-types';
// import BlockPortal from './BlockPportal';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import scss from './Block.module.scss';

const Block = ({
  children,
  title = null,
  subTitle = null,
  footer = true,
  header = true,
  style = null,
  className = '',
  iconStartId = null,
  inWork = false,
}) => {
  console.log(`small block '${title}'render`);
  const blockClassName = [scss.block, className].join(' ');

  return (
    <div className={blockClassName} style={style}>
      {header && (
        <div className={scss.header}>
          <SvgIcon iconId={iconStartId}/>
          {/* {sprite && sprite && (
            <span className={scss.iconStart}>
              <svg className={scss.iconSvg}>
                <use href={`${sprite}#${iconStartId}`}></use>
              </svg>
            </span>
          )} */}
          {title && <span className={scss.title}>{title}</span>}
          {subTitle && (
            <span className={scss.subTitle} title={subTitle}>
              {subTitle}
            </span>
          )}
        </div>
      )}
      <div className={scss.content}>
        <div className={scss.overflow}>
          {children}

          {inWork && <span className={scss.inWork}>In work ...</span>}
        </div>
      </div>
      {footer && <div className={scss.footer}></div>}
    </div>
  );
};

Block.propTypes = {};

export default Block;
