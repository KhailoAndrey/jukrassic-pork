import scss from './HeaderContent.module.scss';
import { ReactComponent as Icon } from '../../../images/menu.svg';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
import ModalComponent from '../../Modal/Modal';

// import SwiperBox from 'components/Swiper/Swiper';

function HeaderContent() {
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
    <section id="header" className={scss.header}>
      <div className="container">
        <button
          type="button"
          className={scss.header_burger_btn}
          onClick={openModal}
        >
          <Icon />
        </button>
        {isModalOpen && <ModalComponent onClose={closeModal} />}

        <div className={scss.header_title_container}>
          <div>
            <div className={scss.header_title}>
              <p className={scss.header_title_text}>jukrassic pork</p>
            </div>
            <div className={scss.header_subTitle}>
              <p className={scss.header_subtitle_text}>official website</p>
            </div>
          </div>
          <div className={scss.header_body}>
            <p className={scss.header_textbody}>
              Jukrassic Pork is a pop-rock music band from Ukraine. The project
              was founded in 2000 by Vyacheslav /Zmeark/ Lozowy. Since then,
              several members have changed in the band.
            </p>
          </div>
        </div>
        <HeaderMenu />
        <div className={scss.swiper_box}>swiper box</div>
      </div>
    </section>
  );
}

export default HeaderContent;
