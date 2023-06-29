import scss from './HeaderMenu.module.scss';
import { MdArrowForward } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../images/Logo.svg';
import { ReactComponent as Burger } from '../../../images/burger_menu.svg';
import ModalComponent from 'components/Modal/Modal';
import { useState } from 'react';

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function HeaderMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add(scss.modalOpen);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove(scss.modalOpen);
  };
  return (
    <div className={scss.header_menu}>
      <button className={scss.logo} onClick={handleScrollToTop}>
        <Logo />
      </button>
      <NavLink to="/music" className={scss.link}>
        <p>Listen to music</p>
        <MdArrowForward style={{ verticalAlign: 'middle', fontSize: '24px' }} />
      </NavLink>
      <button className={scss.burger_btn} onClick={openModal}>
        <Burger />
      {isModalOpen && <ModalComponent onClose={closeModal} />}
      </button>
    </div>
  );
}

export default HeaderMenu;
