import scss from './HeaderContent.module.scss';
import { ReactComponent as Icon } from '../../../images/menu.svg';
import { MdArrowForward } from 'react-icons/md';
// import SwiperBox from 'components/Swiper/Swiper';

function HeaderContent() {
  return (
    <section className={scss.header}>
      <div className="container">
        <button type="button" className={scss.header_burger_btn}>
          <Icon />
        </button>
        <div className={scss.header_title_container}>
          <div className={scss.header_title}>
            <p className={scss.header_title_text}>jukrassic pork</p>
          </div>
          <div className={scss.header_subTitle}>
            <p className={scss.header_subtitle_text}>jukrassic pork</p>
          </div>
          <div className={scss.header_body}>
            <p className={scss.header_textbody}>
              Jukrassic Pork is a pop-rock music band from Ukraine. The project
              was founded in 2000 by Vyacheslav /Zmeark/ Lozowy. Since then,
              several members have changed in the band.
            </p>
          </div>
        </div>
        <button className={scss.header_btn_text}>
          <p>Listen to music</p>
          <MdArrowForward
            style={{ verticalAlign: 'middle', fontSize: '24px' }}
          />
        </button>
        <div
          style={{
            width: '100%',
            height: '264px',
            // paddingBottom: '16px',
            backgroundColor: '#c3ffa3',
            textAlign: 'center',
          }}
        >
          swiper box
        </div>
      </div>
    </section>
  );
}

export default HeaderContent;