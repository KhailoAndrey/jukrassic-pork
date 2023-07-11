import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import SwiperHeader from 'components/Swiper/SwiperHeader/SwiperHeader';
import { LanguageContext } from 'utils/LanguageContext';
import useFetch from 'hooks/useFetch';
import Menu from 'components/Menu/Menu';
import scss from './HeaderContent.module.scss';

function HeaderContent() {
  const { currentLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();
  const isMobile = false;
  const { data } = useFetch('history');

  return (
    <section id="header" className={scss.header}>
      <div className={`container ${scss.header_container}`}>
        <Menu />
        <div className={scss.header_title_container}>
          <div className={scss.sticky_container}>
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
                : `Jukrassic Pork — український поп-рок гурт. Музичний проєкт був заснований у 2000 році Вячеславом /Zmeark/ Лозовим. З того часу, склад гурту неодноразово зазнавав змін.`}
            </p>
          </div>
          <HeaderMenu isMobile={!isMobile} />
          <div className={scss.swiper_box}>
            {data && <SwiperHeader data={data} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderContent;
