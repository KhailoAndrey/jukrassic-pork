import React from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

import s from './BandMembers.module.scss';
import photo from '../../images/IMG.png';
import photoT from '../../images/photoT.png';
import photoD from '../../images/photoD.png';
const SwiperMember = ({ bandMembers }) => {
  return (
    <Swiper
      // className={`mySwiper ${s.list}`}
      modules={[Navigation, Scrollbar]}
      navigation
      scrollbar={{ draggable: true }}
      grabCursor={true}
    >
      {bandMembers?.map((member, i) => (
        <SwiperSlide key={member.id}>
          {/* <img
              src={photo}
              alt="VYacheslav"
              srcSet={photo}
              width={358}
              height={440}
              className={s.member_photo}
            /> */}
          <div className={s.member}>
            <picture className={s.member_photo}>
              <source
                srcSet={photoD}
                media="(min-width: 1440px)"
                type="image/png"
              />
              <source
                srcSet={photoT}
                media="(min-width: 768px)"
                type="image/png"
              />
              <source
                srcSet={photo}
                media="(max-width: 767px)"
                type="image/png"
              />
              <img src={photo} alt="VYacheslav" />
            </picture>
            <div className={s.member_info}>
              <h3 className={s.member_name}> VYacheslav /ZMEARK/ Lozowy</h3>
              <p className={s.member_position}>{member.position}</p>
              <p className={s.member_description}>{member.about}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperMember;

/* <li className={s.member}> */

/* <img
              src={photo}
              alt="VYacheslav"
              srcSet={photo}
              width={358}
              height={440}
              className={s.member_photo}
            /> */

/* <picture className={s.member_photo}>
          <source
            srcSet={photoD}
            media="(min-width: 1440px)"
            type="image/png"
          />
          <source srcSet={photoT} media="(min-width: 768px)" type="image/png" />
          <source srcSet={photo} media="(max-width: 767px)" type="image/png" />
          <img src={photo} alt="VYacheslav" />
        </picture> */

/* <div className={s.member_info}>
          <h3 className={s.member_name}> VYacheslav /ZMEARK/ Lozowy</h3>
          <p className={s.member_position}>
            Founder, Producer, Founder, Manager, Composer, Lyricist, Keyboards
          </p>
          <p className={s.member_description}>
            Founded «Jukrassic Pork» project in 2000.
          </p>
        </div>
      </li> */
/* <div className={s.wrap_btn}>
        <button className={s.btn}>left</button>
        <button className={s.btn}>right</button>
      </div> */
