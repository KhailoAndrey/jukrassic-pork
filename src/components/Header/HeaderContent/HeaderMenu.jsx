import scss from './HeaderMenu.module.scss';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../images/Logo.svg';
import { ReactComponent as Burger } from '../../../images/burger_menu.svg';
import { ReactComponent as CloseBtn } from '../../../images/close_modal.svg';
import ModalComponent from '../../Modal/Modal';
import { useState } from 'react';

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function HeaderMenu({page, text}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add(scss.modalOpen);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove(scss.modalOpen);
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
      {isModalOpen ? (
        <button className={scss.burger_btn} onClick={closeModal}>
          {isModalOpen && <ModalComponent onClose={closeModal} />}
          <CloseBtn />
        </button>
      ) : (
        <button className={scss.burger_btn} onClick={openModal}>
          <Burger />
          {isModalOpen && <ModalComponent onClose={closeModal} />}
        </button>
      )}
    </div>
  );
}

export default HeaderMenu;
