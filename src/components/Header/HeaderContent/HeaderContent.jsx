import scss from './HeaderContent.module.scss';
import { ReactComponent as Icon } from '../../../images/menu.svg';
import HeaderMenu from './HeaderMenu';

// import SwiperBox from 'components/Swiper/Swiper';

function HeaderContent() {
  return (
    <section className={scss.header}>
      <div className="container">
        <button type="button" className={scss.header_burger_btn}>
          <Icon />
        </button>
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
