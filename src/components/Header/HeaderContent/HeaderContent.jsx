import scss from './HeaderContent.module.scss';
import { ReactComponent as Icon } from '../../../images/menu.svg';
import { ReactComponent as Burger } from '../../../images/burger_menu.svg';
import { ReactComponent as Logo } from '../../../images/Logo.svg';

import { MdArrowForward } from 'react-icons/md';
import {  NavLink } from 'react-router-dom';
// import { unstable_HistoryRouter } from 'react-router-dom';
// import SwiperBox from 'components/Swiper/Swiper';

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};


function HeaderContent() {
  // const history = unstable_HistoryRouter();
  
  // const handleClick = () => {
  //   history.push('/music');
  // };
  
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
        <div className={scss.header_menu}>
          <button className={scss.logo} onClick={handleScrollToTop}>
            <Logo />
          </button>
          <NavLink
            to="/music"
            // activeClassName={scss.link}
            className={scss.link}
          >
            <p>Listen to music</p>
            <MdArrowForward
              style={{ verticalAlign: 'middle', fontSize: '24px' }}
            />
          </NavLink>
          {/* <button className={scss.header_btn_text}>
            <p>Listen to music</p>
            <MdArrowForward
              style={{ verticalAlign: 'middle', fontSize: '24px' }}
            />
          </button> */}
          <button className={scss.burger_btn}>
            <Burger />
          </button>
        </div>
        <div className={scss.swiper_box}>swiper box</div>
      </div>
    </section>
  );
}

export default HeaderContent;
