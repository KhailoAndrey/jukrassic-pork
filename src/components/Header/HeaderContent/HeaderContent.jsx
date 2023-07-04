import { useContext, useEffect, useState } from 'react';
import { ReactComponent as Icon } from '../../../images/menu.svg';
import HeaderMenu from './HeaderMenu';
import ModalComponent from '../../Modal/Modal';
import SwiperHeader from 'components/Swiper/SwiperHeader/SwiperHeader';
import { LanguageContext } from 'utils/LanguageContext';
import useFetch from 'hooks/useFetch';
import useModal from 'hooks/useModal';
import scss from './HeaderContent.module.scss';

function HeaderContent() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const { isModalOpen, setIsModalOpen } = useModal({ styles: scss.modalOpen });
  const { currentLanguage } = useContext(LanguageContext);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const { data } = useFetch('history');

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
    <section id="header" className={scss.header}>
      <div className={`container ${scss.header_container}`}>
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
        )}

        <div className={scss.header_title_container}>
          <div>
            <div className={scss.header_title}>
              <p className={scss.header_title_text}>
                {data ? data.title[currentLanguage] : 'jukrassic pork'}
              </p>
            </div>
            <div className={scss.header_subTitle}>
              <p className={scss.header_subtitle_text}>official website</p>
            </div>
          </div>
        </div>
        <HeaderMenu page="Home" text="Listen to music" />
        <div>
          <div className={scss.header_body}>
            <p className={scss.header_textbody}>
              {data
                ? data.description[currentLanguage]
                : `'Jukrassic Pork is a pop-rock music band from Ukraine. The project
              was founded in 2000 by Vyacheslav /Zmeark/ Lozowy. Since then,
            several members have changed in the band.'`}
            </p>
          </div>
          <div className={scss.swiper_box}>
            {data && <SwiperHeader data={data} />}
            <div className={scss.swiper_overlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderContent;
