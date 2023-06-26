import s from './BandMembers.module.scss';
import photo from '../../images/IMG.png';
import photoT from '../../images/photoT.png';
import photoD from '../../images/photoD.png';

function BandMembers() {
  return (
    <section className={s.bandMembers}>
      <div className={`container ${s.band}`}>
        <h2 className={s.title}>band members</h2>
        <div className={s.info}>
          <p className={s.info_text}>
            We are a pop-rock trio from Nizhyn, Chernighiv Rg., Ukraine. Our aim
            is just the creation of good music, a bit heavy but spiced by some
            substantial portion of electronic.
          </p>
          <div className={s.member}>
            {/* <img
              src={photo}
              alt="VYacheslav"
              srcSet={photo}
              width={358}
              height={440}
              className={s.member_photo}
            /> */}
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
              <p className={s.member_position}>
                Founder, Producer, Founder, Manager, Composer, Lyricist,
                Keyboards
              </p>
              <p className={s.member_description}>
                Founded «Jukrassic Pork» project in 2000.
              </p>
            </div>
          </div>
          <div className={s.wrap_btn}>
            <button className={s.btn}>left</button>
            <button className={s.btn}>right</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BandMembers;
