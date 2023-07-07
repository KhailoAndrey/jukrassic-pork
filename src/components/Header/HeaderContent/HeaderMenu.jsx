// import { NavLink } from 'react-router-dom';
// import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { ReactComponent as Logo } from '../../../images/Logo.svg';
import { ReactComponent as Burger } from '../../../images/burger_menu.svg';
import { ReactComponent as CloseBtn } from '../../../images/close_modal.svg';
import ModalComponent from '../../Modal/Modal';
import useModal from 'hooks/useModal';
import scss from './HeaderMenu.module.scss';
import { useEffect, useRef } from 'react';
import CommonButton from '../../CommonButton/CommonButton';
import { useTranslation } from 'react-i18next';

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function HeaderMenu({ page, text, isMobile }) {
  const { isModalOpen, setIsModalOpen } = useModal({ styles: scss.modalOpen });
  const modalRef = useRef(null);
    const { t } = useTranslation();


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

  // const linkTo = page === 'Home' ? '/music' : '/';

  return (
    <div
      className={`${scss.header_menu} ${isMobile ? scss.mobile : scss.desktop}`}
    >
      <button className={scss.logo} onClick={handleScrollToTop}>
        <Logo />
      </button>
      <CommonButton valueButton={t('listen_music')} />
      {/* <NavLink to={linkTo} className={scss.link}>
        {page === 'Home' ? (
          <>
            <p>{text}</p>
            <MdArrowForward
              style={{ verticalAlign: 'middle', fontSize: '24px' }}
            />
          </>
        ) : (
          <>
            <MdArrowBack
              style={{ verticalAlign: 'middle', fontSize: '24px' }}
            />
            <p>{text}</p>
          </>
        )}
      </NavLink> */}
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

export default HeaderMenu;
