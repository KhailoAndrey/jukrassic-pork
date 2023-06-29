import React from 'react';
import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReactComponent as ArrowPrev } from '../../images/arrow_back.svg';
import { ReactComponent as ArrowNext } from '../../images/arrow_forward.svg';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

import s from './BandMembers.module.scss';

SwiperCore.use([Navigation]);

const SwiperMember = ({ bandMembers }) => {
  const carouselSettings = {
    spaceBetween: 5,
    initialSlide: 0,
    slidesPerView: 1,
    navigation: {
      nextEl: `.swiper-next-button`,
      prevEl: `.swiper-prev-button`,
    },
    modules: [Scrollbar],
    scrollbar: {
      el: `.swiper-scrollbar`,
      draggable: true,
      // hide: true,
      // dragSize: 'auto',
      snapOnRelease: true,
    },
    grabCursor: true,
    speed: 1000,
  };

  return (
    <>
      <Swiper {...carouselSettings} className={s.list}>
        {bandMembers?.map(member => (
          <SwiperSlide key={member.id}>
            <div className={s.member}>
              <img
                src={member.photo}
                alt={member.fullName}
                srcSet={member.photo}
                className={s.member_photo}
              />
              <div className={s.member_info}>
                <h3 className={s.member_name}> {member.fullName}</h3>
                <p className={s.member_position}>{member.position}</p>
                <p className={s.member_description}>{member.about}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Add Navigation */}
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
      {/* Add ScrollBar */}
      <div className={`swiper-scrollbar ${s.swiperScrollbarBandDrag}`}></div>
    </>
  );
};

export default SwiperMember;
