import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { ReactComponent as Logo } from '../../images/Logo.svg';
import { ReactComponent as Burger } from '../../images/burger_menu.svg';
import { ReactComponent as CloseBtn } from '../../images/close_modal.svg';
import ModalComponent from '../Modal/Modal';
import useModal from 'hooks/useModal';
import BackButton from '../CommonButton/BackButton';
import scss from './MusicMenu.module.scss';

// const handleScrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// };

function MusicMenu({ page, text, isMobile }) {
  const { isModalOpen, setIsModalOpen } = useModal({ styles: scss.modalOpen });
  const modalRef = useRef(null);
  const { t } = useTranslation();
    const navigate = useNavigate();


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.activeElement.blur();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });
  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }
  function handleOutsideClick(event) {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  }

  const handleLogoClick = () => {
    navigate('/#header');
  };

  return (
    <div
      className={`${scss.header_menu} ${isMobile ? scss.mobile : scss.desktop}`}
    >
      <button className={scss.logo} onClick={handleLogoClick}>
        <Logo />
      </button>
      <BackButton valueButton={t('back_to_home')} />
      {isModalOpen && (
        <div ref={modalRef}>
          <ModalComponent
            customClass={scss.modalComponentDisplay}
            onClose={closeModal}
          />
        </div>
      )}
      <button
        className={scss.burger_btn}
        onClick={isModalOpen ? closeModal : openModal}
      >
        {isModalOpen ? (
          <CloseBtn className="icon fade-in" />
        ) : (
          <Burger className="icon fade-out" />
        )}
      </button>
    </div>
  );
}

export default MusicMenu;
