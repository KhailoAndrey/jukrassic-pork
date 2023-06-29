import { useEffect, useState } from 'react';
import { memberApi } from './service';

import s from './BandMembers.module.scss';
import SwiperMember from './SwiperMember';
// import useFetch from 'hooks/useFetch';

const BandMembers = () => {
  // const { isLoading, data } = useFetch('band');
  const [bandMembers, setBandMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBandMembers = async () => {
    setIsLoading(true);
    try {
      const { data } = await memberApi.get('');
      setBandMembers(data);
    } catch (e) {
      console.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBandMembers();
  }, []);

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
          {isLoading ? (
            'Loading...'
          ) : (
            <SwiperMember bandMembers={bandMembers} />
          )}
        </div>
      </div>
    </section>
  );
};

export default BandMembers;
