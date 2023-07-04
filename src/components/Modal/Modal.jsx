import React, { useContext } from 'react';
import { ReactComponent as ModalCloseBtn } from '../../images/modal_close_green.svg';
import { ReactComponent as ModalLogo } from '../../images/Logotype.svg';
import { LanguageContext } from 'utils/LanguageContext';
import styles from './Modal.module.scss';

const links = [
  { name: 'Jukrassic pork', link: 'header' },
  { name: 'Band members', link: 'members' },
  { name: 'Music', link: 'latest-releases' },
  { name: 'Video', link: 'videos' },
  { name: 'Contacts', link: 'contacts' },
];

const ModalComponent = ({ customClass, onClose }) => {
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = lang => {
    changeLanguage(lang);
  };

  return (
    <div className={`${styles.modal} ${customClass}`}>
      <div className={styles.container_closeButton}>
        <button className={styles.closeButton} onClick={onClose}>
          <ModalCloseBtn />
        </button>
      </div>
      <div className={styles.modal_logo}>
        <ModalLogo />
      </div>
      <div className={styles.navi}>
        {links.map(({ name, link }) => {
          return (
            <a
              key={link}
              onClick={onClose}
              className={styles.links}
              href={`#${link}`}
            >
              {name}
            </a>
          );
        })}
      </div>
      <div className={styles.languageButtons}>
        <button
          onClick={() => handleLanguageChange('en')}
          className={`${currentLanguage === 'en' ? styles.active : ''}`}
        >
          EN
        </button>
        <button
          onClick={() => handleLanguageChange('ua')}
          className={`${currentLanguage === 'ua' ? styles.active : ''}`}
        >
          UA
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
