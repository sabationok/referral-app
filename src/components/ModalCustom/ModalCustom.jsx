import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal/ModalPortal';
import css from './modal.module.css';

//* ""handleToggle"" функція яка тоглить стейт модалки
//* ""defaultBtn"" BOOLEAN чи потрібна дефолтна кнопка закриття
//* ""children"" вміст модалки
export const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);
const ModalCustom = ({ handleToggle, defaultBtn = true, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener('keydown', handleToggleModalByEsc);

  function handleToggleModal() {
    handleToggle();
    setIsOpen(!isOpen);
  }
  function handleToggleModalBackdrop(evt) {
    let { target, currentTarget } = evt;
    if (target === currentTarget) {
      console.log('backdrop close modal');
      handleToggle();
      setIsOpen(!isOpen);
    }
  }

  function handleToggleModalByEsc(evt) {
    let { code } = evt;
    if (code === 'Escape') {
      handleToggle();
      setIsOpen(!isOpen);
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
        <div className={css.Backdrop} onClick={handleToggleModalBackdrop}>
          <div className={css.Modal}>
            {defaultBtn && (
              <button className={css.closeModal} onClick={handleToggleModal}>
                Close
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
