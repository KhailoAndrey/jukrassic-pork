import s from './BandMembers.module.scss';
import photo from '../../images/IMG.png';

function BandMembers() {
  return (
    <section className={s.bandMembers}>
      <div className="container">
        <h2 className={s.title}>band members</h2>
        <div className={s.info}>
          <p className={s.info_text}>
            We are a pop-rock trio from Nizhyn, Chernighiv Rg., Ukraine. Our aim
            is just the creation of good music, a bit heavy but spiced by some
            substantial portion of electronic.
          </p>
          <div className={s.member}>
            <img
              src={photo}
              alt="VYacheslav"
              srcSet={photo}
              width={358}
              height={440}
              className={s.member_photo}
            />
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
        </div>
      </div>
    </section>
  );
}

export default BandMembers;
