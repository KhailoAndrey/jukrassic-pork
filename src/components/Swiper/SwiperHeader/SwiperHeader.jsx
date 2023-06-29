import React from 'react';
import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReactComponent as ArrowPrev } from '../../../images/arrow_back.svg';
import { ReactComponent as ArrowNext } from '../../../images/arrow_forward.svg';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

import scss from './SwiperHeader.module.scss';

SwiperCore.use([Navigation]);

const SwiperHeader = ({ bandPhotos }) => {
  const carouselSettings = {
    spaceBetween: 16,
    breakpoints: {
      768: {
        spaceBetween: 24,
      },
    },
    initialSlide: 0,
    slidesPerView: 1,
    navigation: {
      nextEl: `.swiper-next-button`,
      prevEl: `.swiper-prev-button`,
    },
    modules: [Scrollbar],

    grabCursor: true,
    speed: 1000,
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
        {bandPhotos?.map(member => (
          <SwiperSlide key={member.id}>
            <div className={scss.member}>
              <img
                src={member.photo}
                alt={member.fullName}
                srcSet={member.photo}
                className={scss.member_photo}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperHeader;
