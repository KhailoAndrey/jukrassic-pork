import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import { ReactComponent as ArrowPrev } from '../../../images/arrow_back.svg';
import { ReactComponent as ArrowNext } from '../../../images/arrow_forward.svg';

import 'swiper/scss';
import 'swiper/scss/navigation';

import scss from './SwiperHeader.module.scss';

SwiperCore.use([Navigation]);

const SwiperHeader = ({ data }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const nextSlide = swiperRef.current.swiper.slides[1];
      if (nextSlide) {
        nextSlide.style.opacity = '0.4';
        nextSlide.style.transition = 'all 400ms ease-in-out';
      }

      swiperRef.current.swiper.on('slideChange', () => {
        swiperRef.current.swiper.slides.forEach(slide => {
          slide.style.opacity = '';
        });

        const nextSlide =
          swiperRef.current.swiper.slides[
            swiperRef.current.swiper.activeIndex + 1
          ];
        if (nextSlide) {
          nextSlide.style.opacity = '0.4';
          nextSlide.style.transition = 'all 400ms ease-in-out';
        }
      });
    }
  }, []);

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
    loop: true,
    initialSlide: 0,
    navigation: {
      nextEl: '.swiper-next-btn',
      prevEl: '.swiper-prev-btn',
    },
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

      <Swiper ref={swiperRef} {...carouselSettings}>
        {swiperSlides}
        {swiperSlides}
      </Swiper>
    </>
  );
};

export default SwiperHeader;
