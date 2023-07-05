

import { useEffect, useState } from 'react';
import { ReactComponent as Icon } from '../../images/menu.svg';
import scss from '../Header/HeaderContent/HeaderContent.module.scss';
import useModal from 'hooks/useModal';
import ModalComponent from 'components/Modal/Modal';


function Menu() {
    
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const { isModalOpen, setIsModalOpen } = useModal({
    styles: scss.modalOpen,
  });

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
      {isModalOpen && (
          <ModalComponent onClose={() => setIsModalOpen(false)} />
    )
    }
    
          </>
  );
}

export default Menu;