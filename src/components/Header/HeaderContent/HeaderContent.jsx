import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderMenu from './HeaderMenu';
// import ModalComponent from '../../Modal/Modal';
import SwiperHeader from 'components/Swiper/SwiperHeader/SwiperHeader';
import { LanguageContext } from 'utils/LanguageContext';
import useFetch from 'hooks/useFetch';
// import useModal from 'hooks/useModal';
import scss from './HeaderContent.module.scss';
import Menu from 'components/Menu/Menu';

function HeaderContent() {
  // const { isModalOpen, setIsModalOpen } = useModal({ styles: scss.modalOpen });
  const { currentLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();
  const isMobile = false;
  console.log(isMobile);
  const { data } = useFetch('history');

  return (
    <section id="header" className={scss.header}>
      <div className={`container ${scss.header_container}`}>
        <Menu />
        <div className={scss.header_title_container}>
          <div>
            <div className={scss.header_title}>
              <p className={scss.header_title_text}>
                {data ? data.title[currentLanguage] : 'jukrassic pork'}
              </p>
            </div>
            <div className={scss.header_subTitle}>
              <p className={scss.header_subtitle_text}>
                {t('official_website')}
              </p>
            </div>
          </div>
        </div>
        <HeaderMenu page="Home" text={t('listen_music')} isMobile={isMobile} />
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
          <HeaderMenu
            page="Home"
            text={t('listen_music')}
            isMobile={!isMobile}
          />
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
