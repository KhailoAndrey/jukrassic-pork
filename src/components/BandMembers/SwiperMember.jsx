import React from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
//swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';
import 'swiper/scss/autoplay';
//icons
import { ReactComponent as ArrowPrev } from '../../images/arrow_back.svg';
import { ReactComponent as ArrowNext } from '../../images/arrow_forward.svg';
//styles
import s from './BandMembers.module.scss';

SwiperCore.use([Navigation, EffectFade, Pagination, Autoplay]);

const SwiperMember = ({ data }) => {
  const carouselSettings = {
    spaceBetween: 5,
    initialSlide: 0,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-next-button',
      prevEl: '.swiper-prev-button',
    },
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
      stopOnLastSlide: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      type: 'progressbar',
      el: '.swiper-progressbar-band',
    },

    speed: 1000,
  };
  return (
    <div className={s.test}>
      <Swiper {...carouselSettings} className={s.list}>
        {data &&
          data.bandList.map(member => (
            <SwiperSlide key={member.name.en}>
              <div className={s.member}>
                <img
                  src={member.bandImage}
                  alt={member.name.en}
                  srcSet={member.bandImage}
                  className={s.member_photo}
                />
                <div className={s.member_info}>
                  <h3 className={s.member_name}> {member.name.en}</h3>
                  <p className={s.member_position}>
                    {member.specialization.en}
                  </p>
                  <ul className={s.member_description}>
                    {member.descriptionList.map(item => {
                      return (
                        <li key={item.id} className={s.member_description_item}>
                          {item.description.en}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      {/* Add Navigation */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'wrap',
          alignItems: 'center',
          position: 'absolute',
          width: '55%',
          right: '24px',
          marginTop: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <div
            className={`swiper-prev-button ${s.arrowNavigationLeft} ${s.defaultBandPosition}`}
          >
            <ArrowPrev className={s.arrow} />
          </div>
          <div
            className={`swiper-next-button ${s.arrowNavigationRight} ${s.defaultBandPosition}`}
          >
            <ArrowNext className={s.arrow} />
          </div>
        </div>

        {/* Add ProgressBar */}
        <div
          style={{ marginLeft: '25px' }}
          className={`swiper-progressbar-band  ${s.swiperProgressbarBand}`}
        />
      </div>
    </div>
  );
};

export default SwiperMember;
