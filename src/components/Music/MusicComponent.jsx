import React, { useState } from 'react';
import { useContext } from 'react';
import { LanguageContext } from 'utils/LanguageContext';
import useFetch from '../../hooks/useFetch';

import HeaderMenu from '../../components/Header/HeaderContent/HeaderMenu';
import ChapterMusic from './ChapterMusic/ChapterMusic';
import TextMusic from './TextMusic/TextMusic';
import ListMusic from './ListMusic/ListMusic';
import ButtonShowMoreMusic from './ButtonShowMoreMusic/ButtonShowMoreMusic';

import scss from './MusicComponent.module.scss';

function MusicComponent() {
  const { data } = useFetch('music');
  const { currentLanguage } = useContext(LanguageContext);

  const sliceList = 6;
  const [displayCount, setDisplayCount] = useState(sliceList);

  const handleShowMore = () => {
    setDisplayCount(prevCount => prevCount + sliceList);
  };

  const displaySongs = data?.musicList?.slice(0, displayCount) || [];

  return (
    <section className={scss.musicComponent}>
      <div className="container">
        <HeaderMenu page="Music" text="Back to Home" />
        {data && data.title[currentLanguage] && (
          <ChapterMusic chapterMusic={data.title[currentLanguage]} />
        )}
        {data && data.description[currentLanguage] && (
          <TextMusic textMusic={data.description[currentLanguage]} />
        )}
        {data && data.musicList && <ListMusic musicList={displaySongs} />}
        {data && data.musicList.length > displayCount && (
          <ButtonShowMoreMusic
            valueShowMoreMusic="Show more"
            onClick={handleShowMore}
          />
        )}
      </div>
    </section>
  );
}

export default MusicComponent;
