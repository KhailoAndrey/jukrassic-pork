import { NavLink } from 'react-router-dom';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { ReactComponent as Logo } from '../../../images/Logo.svg';
import { ReactComponent as Burger } from '../../../images/burger_menu.svg';
import { ReactComponent as CloseBtn } from '../../../images/close_modal.svg';
import ModalComponent from '../../Modal/Modal';
import useModal from 'hooks/useModal';
import scss from './HeaderMenu.module.scss';

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function HeaderMenu({ page, text }) {
  const { isModalOpen, setIsModalOpen } = useModal({ styles: scss.modalOpen });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const linkTo = page === 'Home' ? '/music' : '/';

  return (
    <div className={scss.header_menu}>
      <button className={scss.logo} onClick={handleScrollToTop}>
        <Logo />
      </button>
      <NavLink to={linkTo} className={scss.link}>
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
      </NavLink>
      {isModalOpen && (
        <ModalComponent
          customClass={scss.modalComponentDisplay}
          onClose={closeModal}
        />
      )}
      <button
        className={scss.burger_btn}
        onClick={isModalOpen ? closeModal : openModal}
      >
        {isModalOpen ? <CloseBtn /> : <Burger />}
      </button>
    </div>
  );
}

export default HeaderMenu;
