import SwiperMember from './SwiperMember';
import useFetch from 'hooks/useFetch';
import { useContext } from 'react';
import { LanguageContext } from 'utils/LanguageContext';
//styles
import s from './BandMembers.module.scss';

const BandMembers = () => {
  const { data } = useFetch('band');
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <section className={s.bandMembers} id="members">
      <div
        className={
          currentLanguage === 'en'
            ? `container ${s.band}`
            : `container ${s.bandDesktop}`
        }
      >
        <h2 className={s.title}>
          {data ? data.title[currentLanguage] : 'band members'}
        </h2>
        <div className={s.info}>
          <p className={s.info_text}>
            {data
              ? data.description[currentLanguage]
              : 'We are a pop-rock trio from Nizhyn, Chernighiv Rg., Ukraine. Our aim is just the creation of good music, a bit heavy but spiced by some substantial portion of electronic.'}
          </p>
          {data && <SwiperMember data={data} />}
        </div>
      </div>
    </section>
  );
};

export default BandMembers;
