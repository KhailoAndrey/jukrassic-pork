import React, { useContext } from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LanguageContext } from 'utils/LanguageContext';
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
  const { currentLanguage } = useContext(LanguageContext);

  const carouselSettings = {
    spaceBetween: 5,
    initialSlide: 0,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-next-button',
      prevEl: '.swiper-prev-button',
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
    <div className={s.containerSwiper}>
      <Swiper {...carouselSettings} className={s.list}>
        {data &&
          data.bandList.map(member => (
            <SwiperSlide key={member.name.en}>
              <div className={s.member}>
                <img
                  src={member.bandImage}
                  alt={member.name[currentLanguage]}
                  srcSet={member.bandImage}
                  className={s.member_photo}
                />
                <div className={s.member_info}>
                  <h3 className={s.member_name}>
                    {member.name[currentLanguage]}
                  </h3>
                  <p className={s.member_position}>
                    {member.specialization[currentLanguage]}
                  </p>
                  <ul className={s.member_description}>
                    {member.descriptionList.map(item => {
                      return (
                        <li key={item.id} className={s.member_description_item}>
                          {item.description[currentLanguage]}
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
      <div className={s.swiperNav}>
        <div className={s.swiperBtns}>
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
          className={`swiper-progressbar-band  ${s.swiperProgressbarBand}`}
        />
      </div>
    </div>
  );
};

export default SwiperMember;
