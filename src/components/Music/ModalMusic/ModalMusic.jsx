import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import ButtonModalClose from './ButtonModalClose/ButtonModalClose';
import scss from './ModalMusic.module.scss';

const modalWindow = document.querySelector('#modal-music');

function ModalMusic({ onCloseModal, modalContent }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      onCloseModal();
    }
  }

  function handleBackdropClick(event) {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  }

  return createPortal(
    <div className={scss.modalBackdrop} onClick={handleBackdropClick}>
      <div className={scss.modalContent}>
        {modalContent}
        <ButtonModalClose
          onCloseModal={onCloseModal}
          className={scss.buttonModalClose}
        />
      </div>
    </div>,
    modalWindow
  );
}

export default ModalMusic;
