import { useEffect, useState } from 'react';
import useModal from 'hooks/useModal';
import ModalComponent from '../Modal/Modal';
import { ReactComponent as Icon } from '../../images/menu.svg';

import scss from './Menu.module.scss';

function Menu() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const { isModalOpen, setIsModalOpen } = useModal({ styles: scss.modalOpen });

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      clearTimeout(scrollTimeout);

      setIsHeaderVisible(false);
      setScrollTimeout(setTimeout(() => setIsHeaderVisible(true), 300));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTimeout]);

  return (
    <>
      <div
        className={`${scss.header_burger_container} ${
          isHeaderVisible ? '' : scss.hidden
        }`}
      >
        <button
          type="button"
          className={scss.header_burger_btn}
          onClick={openModal}
        >
          <Icon />
        </button>
      </div>

      {isModalOpen && <ModalComponent onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default Menu;
