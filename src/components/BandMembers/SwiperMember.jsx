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
  // const { next, prev } = navigationClasses;

  const carouselSettings = {
    spaceBetween: 5,

    initialSlide: 1,
    navigation: {
      nextEl: `.swiper-next-arrow-gallery`,
      prevEl: `.swiper-prev-arrow-gallery`,
    },
    modules: [Navigation, Scrollbar],
    scrollbar: { draggable: true },
    grabCursor: true,
  };

  return (
    <>
      <Swiper
        // className={`mySwiper ${s.list}`}
        // modules={[Navigation, Scrollbar]}
        // navigation
        // spaceBetween={5}
        // scrollbar={{ draggable: true }}
        // grabCursor={true}
        {...carouselSettings}
        className={s.list}
      >
        {bandMembers?.map((member, i) => (
          <SwiperSlide key={member.id}>
            <div className={s.member}>
              <img
                src={member.photo}
                alt={member.fullName}
                srcSet={member.photo}
                // sizes="(min-width: 1440px) 408px, (min-width: 768px) 340px, (min-width: 343px) 340px"
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
      <div
        className={`swiper-prev-arrow-gallery ${s.arrowNavigationLeft} ${s.defaultBandPosition}`}
      >
        <ArrowPrev />
      </div>
      <div
        className={`swiper-next-arrow-gallery ${s.arrowNavigationRight} ${s.defaultBandPosition}`}
      >
        <ArrowNext />
      </div>
    </>
  );
};

export default SwiperMember;
