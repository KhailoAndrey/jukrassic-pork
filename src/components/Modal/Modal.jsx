import React, { useState } from 'react';
import styles from './Modal.module.scss';
import { ReactComponent as ModalCloseBtn } from '../../images/modal_close_green.svg';
import { ReactComponent as ModalLogo } from '../../images/Logotype.svg';
import { NavLink } from 'react-router-dom';

const ModalComponent = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLanguageChange = language => {
    // Логика для изменения языка сайта
  };

//   const handleNavigate = () => {
//     // Логика для перехода на другую страницу
//   };
    if (isModalOpen) { document.body.classList.add(styles.modalOpen) }
    
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove(styles.modalOpen);
  };

  return (
    <div className={styles.modal}>
      <button className={styles.closeButton} onClick={onClose}>
        <ModalCloseBtn />
      </button>
      <div className={styles.modal_logo}>
        <ModalLogo />
      </div>
      <div className={styles.navi}>
        <NavLink to="/#header" onClick={closeModal} className={styles.links}>
          jukrassic pork
        </NavLink>
        <NavLink to="/#members" onClick={closeModal} className={styles.links}>
          Band members
        </NavLink>
        <NavLink
          to="/#latest-releases"
          onClick={closeModal}
          className={styles.links}
        >
          music
        </NavLink>
        <NavLink to="/#videos" onClick={closeModal} className={styles.links}>
          Videos
        </NavLink>
        <NavLink dto="/#contacts" onClick={closeModal} className={styles.links}>
          Contacts
        </NavLink>
      </div>
      <div className={styles.languageButtons}>
        <button onClick={() => handleLanguageChange('en')}>EN</button>
        <button onClick={() => handleLanguageChange('ru')}>UA</button>
      </div>
    </div>
  );
};

export default ModalComponent;
