import React from 'react';
// import PropTypes from 'prop-types';
// import BlockPortal from './BlockPportal';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import s from './Block.module.scss';

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
  const blockClassName = [s.block, className].join(' ');

  return (
    <div className={blockClassName} style={style}>
      {header && (
        <div className={s.header}>
          <div className={s.iconCircle}>
            <SvgIcon iconId={iconStartId} size={'20px'} />
          </div>
          {title && <span className={s.title}>{title}</span>}
          {subTitle && (
            <span className={s.subTitle} title={subTitle}>
              {subTitle}
            </span>
          )}
        </div>
      )}
      <div className={s.content}>
        <div className={s.overflow}>
          {children}

          {inWork && <span className={s.inWork}>In work ...</span>}
        </div>
      </div>
      {false && <div className={s.footer}></div>}
    </div>
  );
};

Block.propTypes = {};

export default Block;
