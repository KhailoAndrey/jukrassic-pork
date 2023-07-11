import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ModalCloseBtn } from '../../images/modal_close_green.svg';
import { ReactComponent as ModalLogo } from '../../images/Logotype.svg';
import { LanguageContext } from 'utils/LanguageContext';
import styles from './Modal.module.scss';

const links = [
  { name: 'jukrassic_pork', link: 'header' },
  { name: 'band_members', link: 'members' },
  { name: 'music', link: 'latest-releases' },
  { name: 'video', link: 'videos' },
  { name: 'contacts', link: 'contacts' },
];

const ModalComponent = ({ customClass, onClose }) => {
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLanguageChange = lang => {
    changeLanguage(lang);
    onClose();
  };

  const musicBlockRedirect = link => {
    navigate(`/#${link}`);
    setTimeout(() => {
      const element = document.getElementById(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000); 
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
          return pathname.includes('music') ? (
            <p
              onClick={() => {
                musicBlockRedirect(link);
              }}
              key={link}
              className={styles.links}
            >
              {t(`${name}`)}
            </p>
          ) : (
            <a
              key={link}
              onClick={onClose}
              className={styles.links}
              href={`#${link}`}
            >
              {t(`${name}`)}
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
