import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import ButtonModalClose from './ButtonModalClose/ButtonModalClose';
import scss from './ModalMusic.module.scss';

const modalWindow = document.querySelector('#modal-music');

function ModalMusic({ onCloseModal, modalContent }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    setIsOpen(true);
    disableScroll();
    return () => {
      enableScroll();
    };
  }, []);

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

  function handleCloseModal() {
    setIsOpen(false);
    setTimeout(() => {
      onCloseModal();
      enableScroll();
    }, 300);
  }

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  function enableScroll() {
    document.body.style.overflow = '';
  }

  return createPortal(
    isOpen && (
      <div
        className={`${scss.modalBackdrop} ${isOpen && scss.openBackdrop}`}
        onMouseDown={handleBackdropClick}
      >
        <div className={`${scss.modalContent} ${isOpen && scss.openContent}`}>
          {modalContent}
          <ButtonModalClose
            onCloseModal={handleCloseModal}
            className={scss.buttonModalClose}
          />
        </div>
      </div>
    ),
    modalWindow
  );
}

export default ModalMusic;
