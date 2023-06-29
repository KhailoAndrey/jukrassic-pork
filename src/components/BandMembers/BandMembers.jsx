import SwiperMember from './SwiperMember';
import useFetch from 'hooks/useFetch';
//styles
import s from './BandMembers.module.scss';

const BandMembers = () => {
  const { data } = useFetch('band');
  // console.log('isLoading', isLoading);

  return (
    <section className={s.bandMembers}>
      <div className={`container ${s.band}`}>
        <h2 className={s.title}>{data && data.title.en}</h2>
        <div className={s.info}>
          <p className={s.info_text}>{data && data.description.en}</p>
          {data && <SwiperMember data={data} />}
        </div>
      </div>
    </section>
  );
};

export default BandMembers;
