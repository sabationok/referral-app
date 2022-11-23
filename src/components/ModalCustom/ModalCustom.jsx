import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal/ModalPortal';
import SvgIconClose from './SvgIconClose/SvgIconClose';
import s from './ModalCustom.module.scss';

//* ""handleToggle"" функція яка тоглить стейт модалки
//* ""defaultBtn"" BOOLEAN чи потрібна дефолтна кнопка закриття
//* ""children"" вміст модалки
export const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

const ModalCustom = ({ handleToggle, defaultBtn = true, children, }) => {
  const [isOpen, setIsOpen] = useState(true);

  window.addEventListener('keydown', handleToggleModalByEsc);

  function handleToggleModal() {
    handleToggle();
    setIsOpen(!isOpen);
  }
  function handleToggleModalBackdrop(evt) {
    let { target, currentTarget } = evt;
    if (target === currentTarget) {
      handleToggle();
      setIsOpen(!isOpen);
    }
  }

  function handleToggleModalByEsc(evt) {
    let { code } = evt;
    if (code === 'Escape') {
      handleToggle();
      // setIsOpen(!isOpen);
      window.removeEventListener('keydown', handleToggleModalByEsc);
    }
  }
  useEffect(() => {
    if (isOpen) {
      document.querySelector('body').classList.add('NotScroll');
    }
    return () => {
      document.querySelector('body').classList.remove('NotScroll');
    };
  }, [isOpen]);

  return (
    <ModalPortal>
      <ModalContext.Provider value={{ isOpen, handleToggleModal }}>
        <div className={s.Backdrop} onClick={handleToggleModalBackdrop}>
          <div className={s.Modal}>
            {defaultBtn && (
              <button className={s.closeModal} onClick={handleToggleModal}>
                <SvgIconClose size={'100%'}/>
              </button>
            )}
            {children}
          </div>
        </div>
      </ModalContext.Provider>
    </ModalPortal>
  );
};

ModalCustom.propTypes = {
  isOpenModal: PropTypes.bool,
  handleToggle: PropTypes.func,
  defaultBtn: PropTypes.bool,
  // ! children: PropTypes.typeOf([]),
};

export default ModalCustom;
