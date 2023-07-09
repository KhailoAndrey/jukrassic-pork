// import React, { useState } from 'react';
import SwiperCore, {
  Navigation,
  Scrollbar,
  Pagination,
  EffectFade,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReactComponent as ArrowPrev } from '../../../images/arrow_back.svg';
import { ReactComponent as ArrowNext } from '../../../images/arrow_forward.svg';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import scss from './SwiperHeader.module.scss';

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay, Scrollbar]);

const SwiperHeader = ({ data }) => {
  
  const carouselSettings = {
    spaceBetween: 16,
    slidesPerView: 1,
    breakpoints: {
      768: {
        spaceBetween: 24,
        slidesPerView: 1.33,
      },
      1440: {
        slidesPerView: 1.25,
      },
    },
    loop: 'true',    
    initialSlide: 0,
    navigation: {
      nextEl: `.swiper-next-btn`,
      prevEl: `.swiper-prev-btn`,
    },
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    // modules: [Pagination, Scrollbar],    
    speed: 1000,    
  };
  const swiperSlides = data.historyImgList.map(({ srcWebp, srcJpg }, index) => (
    <SwiperSlide key={index}>
      <div className={scss.member}>
        <picture>
          <source srcSet={srcWebp} type="image/webp" />
          <source srcSet={srcJpg} type="image/jpeg" />
          <img
            src={srcJpg}
            alt="Jukrassic_Pork_photo"
            className={scss.member_photo}
          />
        </picture>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <div className={scss.arrows_container}>
        <div
          className={`swiper-prev-btn ${scss.arrowNavigationLeft} ${scss.defaultBandPosition}`}
        >
          <ArrowPrev className={scss.arrow} />
        </div>
        <div
          className={`swiper-next-btn ${scss.arrowNavigationRight} ${scss.defaultBandPosition}`}
        >
          <ArrowNext className={scss.arrow} />
        </div>
      </div>

      <Swiper {...carouselSettings}>
        {swiperSlides}
        {swiperSlides}
      </Swiper>
    </>
  );
};

export default SwiperHeader;
