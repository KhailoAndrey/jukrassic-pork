// import React, { useState } from 'react';
import SwiperCore, { Navigation, Scrollbar, Pagination, EffectFade, Autoplay } from 'swiper';
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

  // const [currentSlide, setCurrentSlide] = useState(0);

  // const handleSlideChange = swiper => {
  //   setCurrentSlide(swiper.activeIndex);
  // };
  const carouselSettings = {
    spaceBetween: 16,
    slidesPerView: 'auto',
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
    // pagination: {
    //   clickable: true,
    // },
    initialSlide: 0,
    navigation: {
      nextEl: `.swiper-next-button`,
      prevEl: `.swiper-prev-button`,
    },
    // modules: [Pagination, Scrollbar],
    autoplay: {
      delay: 3000
    },
    fadeEffect: {
      crossFade: true
    },

    // grabCursor: true,
    speed: 1000,
    // on: {
    //   slideChange: handleSlideChange,
    // },
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
          className={`swiper-prev-button ${scss.arrowNavigationLeft} ${scss.defaultBandPosition}`}
        >
          <ArrowPrev className={scss.arrow} />
        </div>
        <div
          className={`swiper-next-button ${scss.arrowNavigationRight} ${scss.defaultBandPosition}`}
        >
          <ArrowNext className={scss.arrow} />
        </div>
      </div>

      <Swiper {...carouselSettings}>{swiperSlides}</Swiper>
    </>
  );
};

export default SwiperHeader;
