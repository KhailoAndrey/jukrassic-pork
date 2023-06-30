import React, { useState } from 'react';
import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReactComponent as ArrowPrev } from '../../../images/arrow_back.svg';
import { ReactComponent as ArrowNext } from '../../../images/arrow_forward.svg';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

import scss from './SwiperHeader.module.scss';

SwiperCore.use([Navigation]);

const SwiperHeader = ({ data }) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = swiper => {
    setCurrentSlide(swiper.activeIndex);
  };
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
    initialSlide: 0,
    navigation: {
      nextEl: `.swiper-next-button`,
      prevEl: `.swiper-prev-button`,
    },
    modules: [Scrollbar],

    grabCursor: true,
    speed: 1000,
    on: {
      slideChange: handleSlideChange,
    },
  };

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
      <Swiper {...carouselSettings}>
        {data &&
          data.historyImgList.map((photo, index) => (
            <SwiperSlide key={photo.srcJpg}>
              <div className={scss.member}>
                <img
                  src={photo.srcJpg}
                  alt={'Jukrassic_Pork_photo'}
                  srcSet={photo.srcJpg}
                  className={scss.member_photo}
                />
                {index === 1 && (
                  <div
                    className={scss.overlay}
                    style={{ opacity: currentSlide === 0 ? 0 : 0.6 }}
                  ></div>
                )}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default SwiperHeader;
